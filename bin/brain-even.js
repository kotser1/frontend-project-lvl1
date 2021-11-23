#!/usr/bin/env node
import playGame from '../src/index.js';
import { getEvenGameData, rules } from '../src/games/even.js';

playGame(rules, getEvenGameData);
