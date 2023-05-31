$(function(){
    "use strict";
    let empty_sqr = {left: 300,top: 300};

    function isMovable(tile){
        
        let tile_left = parseInt(tile.css("left"));
        let tile_top = parseInt(tile.css("top"));
       
        if(((tile_left+100 === empty_sqr.left) && (tile_top === empty_sqr.top))||
            ((tile_left-100 === empty_sqr.left) && (tile_top === empty_sqr.top))|| 
            ((tile_left === empty_sqr.left) && (tile_top + 100 === empty_sqr.top))||
            ((tile_left === empty_sqr.left) && (tile_top - 100 === empty_sqr.top))) {

                return true;
            } else{
                return false;
            }
    }

    function toggleHighlight(){
        if(isMovable($(this))){
            $(this).toggleClass("movablepiece");
        }
    }

    function moveTile(){
        
        if(isMovable($(this))){
            let tile = $(this);
            let tile_left = parseInt(tile.css("left"));
            let tile_top = parseInt(tile.css("top"));
            tile.css({"left": empty_sqr.left + "px", "top": empty_sqr.top + "px"});
            empty_sqr.left = tile_left;
            empty_sqr.top = tile_top;
            setTimeout(gameState,100);
        }
    }

    function shuffle(){
        for(let i = 0; i<500; i++){
            let thisTile = Math.floor(Math.random()*15)+1;
            let tileId = "#tile"+thisTile;
            $(tileId).click();
        }
    }

    function gameState(){
        let tiles = $("#puzzlearea").children();
        let completed = true;

        tiles.each(function(indx,tile){
            
            tile = $(tile);
            //current position
            let tile_left = parseInt(tile.css("left"));
            let tile_top = parseInt(tile.css("top"));
    
            let tile_indx = tile.text()-1;
            //original position
            let pos_left = tile_indx % 4 * 100;
            let pos_top = Math.floor(tile_indx/4) * 100;

            //checks if the tile isnot in its original position
            if(!(tile_left === pos_left && tile_top === pos_top)){
                
                completed = false;
                return false;// breaks from .each loop if one is not in its position;
            }
        });

            if(completed){
                alert("SUCCESS! Congragulation, you have completed the puzzle!");
            }

    }


    $("#puzzlearea").css("background-color","grey");

    $("#puzzlearea").children()
                .each(function(indx,e){
                    let img_x = indx % 4 * (-100);
                    let img_y = Math.floor(indx/4) * (-100);
                    let tile_x = indx % 4 * 100;
                    let tile_y = Math.floor(indx/4) * 100;
                    let tile = $(e);
                    tile.attr("id", "tile"+(indx+1))
                        .addClass("puzzlepiece")
                        .css({"background-position": `${img_x}px ${img_y}px`,
                                "left": tile_x,
                                "top": tile_y})
                        .mouseover(toggleHighlight)
                        .mouseout(toggleHighlight)
                        .click(moveTile);
                });

    $("#shufflebutton").click(shuffle);
    
}
);