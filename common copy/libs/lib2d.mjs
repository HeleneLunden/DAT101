"use strict"


/**
 * @library lib2d
 * @description A library for classes that manage 2D graphics
 */


/**
 * Lag en klasse TPoint med en konstruktør asom tar inn x- og y-koordinater.
 */
class TPoint {
    x = 0;
    x = 0;
    constructor (aX, aY){
        this.x = aX;
        this.y = aY;
    }
}

/*
Lag en klasse TPosition som arver fra TPoint og som hae en konstruktøe som tar inn x- og y-koordinater.
Og roper på auper med disse koordinatene.
En duplikat funksjon "clone" som returnerer en ny instans av TPosition med samme x- og y-koordinater.
En funksjon for å finne avstanden mellom to TPoint objekter.
*/

class TPosition extends TPoint{
constructor (aX, aY){
    super(aX, aY);
    
}

clone(){
    return new TPosition(this.x, this.y);
}
distanceToPoint(aPoint){

}
distanceToPoint(aPoint){
    const dx = this.x - aPoint.x;
    const dy = this.y - aPoint.y;
    return Math.hypot(dx, dy);
}

}//End of TPosition class

export default {
    /**
     * @class TPoint
     * @description A class representation for x anf y point in 2D.
     * @param {number} aX - the x-coordinate.
     * @param {number} aY - The y-coordinate.
     */
    TPoint,
    /**
     * @class TPosition
     * @description Aposition class for manipulation of point in 2D.
     * @param {number} ax - the x-coordinate
     * @param {number}aY - The y-coordinate.
     * @extends TPoint
     * @method clone - A method to clone the position object
     * @method distanceToPoint - A method to calculate the distance to another point.
     */
    TPosition
}
