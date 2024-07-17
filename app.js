let divs = document.querySelectorAll('.box');
let turnX = true;
let reset = document.querySelector('.reset');
let msg_cont = document.querySelector('.mssg-cont');
let msg = document.querySelector('.mssg');
let new_game = document.querySelector('.new-game');
let count = 0;
const winpatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

for(let div of divs){
    div.addEventListener('click',() => {
        if(turnX){
            console.log('turn X');
            div.innerText = 'X';
            turnX = false;
            count++;
            console.log(count);
        }
        else{
            console.log('turn O');
            div.innerText = 'O';
            turnX = true;
            count++;
            console.log(count);
        }
        div.disabled = true;
        wincheck();
    })
}

const wincheck = () => {
    for(let pattern of winpatterns){
        let pos1val = divs[pattern[0]].innerText;
        let pos2val = divs[pattern[1]].innerText;
        let pos3val = divs[pattern[2]].innerText;
        
        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log('winner',pos1val);
                msg.innerText = `Congratulations "${pos1val}" has won the round`;
                msg_cont.classList.remove('hide');
                new_game.classList.remove('hide');
                disable_boxes();
                reset.classList.add('hide');
            }
            else if(count == 9){
                console.log('Match Draw');
                msg.innerText = 'Match Draw';
                msg_cont.classList.remove('hide');
                new_game.classList.remove('hide');
                reset.classList.add('hide');
            }
        }
    }
}

const disable_boxes = () => {
    for(let div of divs){
        div.disabled = true;
    }
}

const enable_boxes = () => {
    for(let div of divs){
        div.disabled = false;
    }
}

const resetfunc = () => {
    console.log('reset');
    for(let div of divs){
        div.innerText = '';
    }
    turnX = true;
    count = 0;
    enable_boxes();
}
reset.addEventListener('click',resetfunc);

const new_game_func = () => {
    console.log('reset');
    for(let div of divs){
        div.innerText = '';
    }
    turnX = true;
    enable_boxes();
    msg_cont.classList.add('hide');
    new_game.classList.add('hide');
    reset.classList.remove('hide');
}
new_game.addEventListener('click',new_game_func);