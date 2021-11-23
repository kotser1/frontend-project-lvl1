#!/usr/bin/env node
import playGame from '../src/index.js';
import { getCalcGameData, rules } from '../src/games/calc.js';

playGame(rules, getCalcGameData);
