'use strict';
/* global Blockly, options,JST, RoboBlocks */
/* jshint sub:true */

/**
 * bq_joystick code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bq_joystick = function() {
    var dropdown_pin = Blockly.Arduino.valueToCode(this,'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = JST['bq_joystick']({
        'dropdown_pin': dropdown_pin,
    });
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * bq_joystick block definition
 * @type {Object}
 */
Blockly.Blocks.bq_joystick = {
    category: RoboBlocks.locales.getKey('LANG_CATEGORY_BQ'),
    tags: ['bq', 'joystick'],
    helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bq_joystick',
    /**
     * bq_joystick initialization
    */
    init: function() {
        this.setColour(RoboBlocks.LANG_COLOUR_BQ);
        this.appendValueInput('PIN')
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK'))
        .appendField(new Blockly.FieldImage('img/blocks/bqmod11.png', 209 * options.zoom, 277 * options.zoom))
        .appendField(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_PIN'))
        .setCheck(Number);
        this.setOutput(true, Number);
        this.setTooltip(RoboBlocks.locales.getKey('LANG_BQ_JOYSTICK_TOOLTIP'));
    }
};
