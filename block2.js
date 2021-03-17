class Block2 {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.4,
            'friction': 0.5,
            'density': 2.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255

        World.add(world, this.body);
    }
    display() {
        if (this.body.speed < 3) {


            var pos = this.body.position;

            rectMode(CENTER);
            stroke(0);
            strokeWeight(1);
            fill(200, 0, 0);
            rect(pos.x, pos.y, this.width, this.height);
        } else {
            push();
            this.visibility = this.visibility - 5
            tint(255, this.visibility)
            World.remove(world, this.body);
            pop();
        }
    }

    score(){
        if(this.visibility < 0 && this.visibility > -1005){
            score = score + 1
        }


};
