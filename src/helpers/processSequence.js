import Api from '../tools/api';
import {__, allPass, andThen, assoc, compose, concat, gt, ifElse, length, lt, mathMod, otherwise, partial, prop, tap, test} from "ramda";

const api = new Api();

const squareNumber = num => num ** 2;
const isGreaterThanTwo = gt(__, 2);
const isLowerThanTen = lt(__, 10);

const thenSquareNumber = andThen(squareNumber);

const isLengthGreaterThanTwo = compose(isGreaterThanTwo, length);
const isLengthLowerThanTen = compose(isLowerThanTen, length);
const areOnlyNumbersPresent = test(/^[0-9]+\.?[0-9]+$/);
const roundStringAndConvertToNumber = compose(Math.round, Number);
const convertModuloThreeToString = compose(String, mathMod(__, 3));

const thenConvertModuloThreeToString = andThen(convertModuloThreeToString);
const thenGetLength = andThen(length);

const isValid = allPass([isLengthGreaterThanTwo, isLengthLowerThanTen, areOnlyNumbersPresent]);

const API_NUMBERS_ENDPOINT = 'https://api.tech/numbers/base';
const API_ANIMALS_ENDPOINT = 'https://animals.tech/';
const getResultFromApiResponse = compose(String, prop('result'));

const associateNumberToBinary = assoc('number', __, { from: 10, to: 2 });

const getBinaryBaseFromApi = compose(
    api.get(API_NUMBERS_ENDPOINT),
    associateNumberToBinary
) ;

const thenGetResultFromApiResponse = andThen(getResultFromApiResponse);
const thenAppendToAnimalsEndpoint = andThen(concat(API_ANIMALS_ENDPOINT));
const thenMakeApiCallWithEmptyParams = andThen(api.get(__, {}));

const processSequence = ({value, writeLog, handleSuccess, handleError}) => {
    const logValue = tap(writeLog);
    const thenLogValue = andThen(logValue);
    const thenHandleSuccess = andThen(handleSuccess);
    const handleAnyOtherError = otherwise(handleError);
    const handleValidationError = partial(handleError, ['ValidationError']);

    const sequencePipeline = compose(
        handleAnyOtherError,
        thenHandleSuccess, 
        thenGetResultFromApiResponse, 
        thenMakeApiCallWithEmptyParams,
        thenAppendToAnimalsEndpoint,
        thenLogValue, 
        thenConvertModuloThreeToString,
        thenLogValue, 
        thenSquareNumber,
        thenLogValue, 
        thenGetLength,
        thenLogValue, 
        thenGetResultFromApiResponse,
        getBinaryBaseFromApi,
        logValue, 
        roundStringAndConvertToNumber,
    );

    const executeWithCondition = ifElse(isValid, sequencePipeline, handleValidationError); 
    const logAndExecuteSequence = compose(executeWithCondition, logValue); 
    logAndExecuteSequence(value);
};

export default processSequence;
