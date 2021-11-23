#!/usr/bin/env node
import playGame from '../src/index.js';
import { rules, getPrimeGameData } from '../src/games/prime.js';

playGame(rules, getPrimeGameData);
