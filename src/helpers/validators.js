import {
    __, allPass, any, compose, countBy, dissoc, equals, gte, identity, prop, values, propEq, complement
} from 'ramda';

const isTwoOrMore = gte(__, 2);
const isThreeOrMore = gte(__, 3);
const anyIsThreeOrMore = any(isThreeOrMore);
const anyValueIsThreeOrMore = compose(anyIsThreeOrMore, values);

const getCircleColor = prop('circle');
const getSquareColor = prop('square');
const getTriangleColor = prop('triangle');
const getStarColor = prop('star');

const isWhiteColor = equals('white');
const isOrangeColor = equals('orange');
const isGreenColor = equals('green');
const removeWhite = dissoc('white');
const getGreenColor = prop('green');
const isRedColor = equals('red');
const isBlueColor = equals('blue');
const isOneRed = propEq('red', 1);
const areTwoGreens = propEq('green', 2);

const colorCount = compose(countBy(identity), values);
const colorCountWithoutWhite = compose(removeWhite, colorCount);

const isStarWhite = compose(isWhiteColor, getStarColor);
const isStarNotWhite = complement(isStarWhite);
const isStarRed = compose(isRedColor, getStarColor);
const isStarNotRed = complement(isStarRed);

const isCircleWhite = compose(isWhiteColor, getCircleColor);
const isCircleBlue = compose(isBlueColor, getCircleColor);

const isTriangleWhite = compose(isWhiteColor, getTriangleColor);
const isTriangleNotWhite = complement(isTriangleWhite);
const isTriangleGreen = compose(isGreenColor, getTriangleColor);

const isSquareWhite = compose(isWhiteColor, getSquareColor);
const isSquareNotWhite = complement(isSquareWhite);
const isSquareGreen = compose(isGreenColor, getSquareColor);
const isSquareOrange = compose(isOrangeColor, getSquareColor);

const isRedEqualToBlue = ({ blue, red }) => blue === red;
const isSquareEqualToTriangle = ({ square, triangle }) => square === triangle;

const areTwoGreenColors = compose(areTwoGreens, colorCount);
const isOneRedColor = compose(isOneRed, colorCount);

const allShapesAreColor = color => compose(propEq(color, 4), colorCount);

const greenColorCount = compose(getGreenColor, colorCount);
const validateShapeSet1 = allPass([isStarRed, isSquareGreen, isTriangleWhite, isCircleWhite]);
const validateShapeSet2 = compose(isTwoOrMore, greenColorCount);
const validateShapeSet3 = compose(isRedEqualToBlue, colorCount);
const validateShapeSet4 = allPass([isStarRed, isCircleBlue, isSquareOrange]);
const validateShapeSet5 = compose(anyValueIsThreeOrMore, colorCountWithoutWhite);
const validateShapeSet6 = allPass([isTriangleGreen, areTwoGreenColors, isOneRedColor]);
const validateShapeSet7 = allShapesAreColor('orange');
const validateShapeSet8 = allPass([isStarNotRed, isStarNotWhite]);
const validateShapeSet9 = allShapesAreColor('green');
const validateShapeSet10 = allPass([isSquareNotWhite, isTriangleNotWhite, isSquareEqualToTriangle]);

export {
    validateShapeSet1,
    validateShapeSet2,
    validateShapeSet3,
    validateShapeSet4,
    validateShapeSet5,
    validateShapeSet6,
    validateShapeSet7,
    validateShapeSet8,
    validateShapeSet9,
    validateShapeSet10,
}