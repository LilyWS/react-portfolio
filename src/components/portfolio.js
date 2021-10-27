import React from 'react';

function Portfolio() {
    return(
        <section id="projects">
            <h2>My Work So Far</h2>
            <div id="exampleWork">
                <a class="display" id="keyboardbattle" href="https://keyboardbattle.herokuapp.com">
                    <div class="description">
                        <h3>Keyboard Battle</h3>
                    </div>
                </a>
                <a class="display" id="terminal-tetris" href="https://replit.com/@K4JINX/TerminalTetris?v=1">
                    <div class="description">
                        <h3>Terminal Tetris</h3>
                    </div>
                </a>
                <a class="display" id="poke-battle" href="https://lilyws.github.io/pokemon-battle/">
                    <div class="description">
                        <h3>PokeBattle Simulator</h3>
                    </div>
                </a>
                <a class="display" id="neural-network" href="https://replit.com/@K4JINX/Feed-Forward-NN-with-Bias-and-One-Hidden-Layer?v=1">
                    <div class="description">
                        <h3>Neural Network</h3>
                    </div>
                </a>  
            </div>
        </section>
    )
}

export default Portfolio