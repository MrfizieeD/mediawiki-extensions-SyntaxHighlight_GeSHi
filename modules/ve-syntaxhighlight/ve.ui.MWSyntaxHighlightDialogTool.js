/*!
 * VisualEditor UserInterface MWSyntaxHighlightDialogTool class.
 *
 * @copyright 2011-2015 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/*global ve, OO */

/**
 * MediaWiki UserInterface syntax highlight tool.
 *
 * @class
 * @extends ve.ui.DialogTool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.MWSyntaxHighlightDialogTool = function VeUiMWSyntaxHighlightDialogTool() {
	ve.ui.MWSyntaxHighlightDialogTool.super.apply( this, arguments );
};
OO.inheritClass( ve.ui.MWSyntaxHighlightDialogTool, ve.ui.DialogTool );
ve.ui.MWSyntaxHighlightDialogTool.static.name = 'syntaxhighlightDialog';
ve.ui.MWSyntaxHighlightDialogTool.static.group = 'object';
ve.ui.MWSyntaxHighlightDialogTool.static.icon = 'alienextension';
ve.ui.MWSyntaxHighlightDialogTool.static.title = OO.ui.deferMsg(
	'syntaxhighlight-visualeditor-mwsyntaxhighlightinspector-title' );
ve.ui.MWSyntaxHighlightDialogTool.static.modelClasses = [ ve.dm.MWBlockSyntaxHighlightNode ];
ve.ui.MWSyntaxHighlightDialogTool.static.commandName = 'syntaxhighlightDialog';
ve.ui.toolFactory.register( ve.ui.MWSyntaxHighlightDialogTool );

ve.ui.commandRegistry.register(
	new ve.ui.Command(
		'syntaxhighlightDialog', 'window', 'open',
		{ args: [ 'syntaxhighlightDialog' ], supportedSelections: [ 'linear' ] }
	)
);

ve.ui.sequenceRegistry.register(
	// Don't wait for the user to type out the full <syntaxhighlight> tag
	new ve.ui.Sequence( 'wikitextSyntax', 'syntaxhighlightDialog', '<syntax', 7 )
);

ve.ui.sequenceRegistry.register(
	new ve.ui.Sequence( 'wikitextSource', 'syntaxhighlightDialog', '<source', 7 )
);
