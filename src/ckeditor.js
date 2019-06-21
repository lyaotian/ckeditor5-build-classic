/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
// import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	// Highlight,
	Font,
	Alignment,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'alignment',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	fontSize: {
		options: [
			10,
			11,
			12,
			14,
			'default',
			18,
			20,
			24,
			36
		]
	},
	fontColor: {
		colors: [{ "color": "#000000", "label": "Black" }, { "color": "#F0F8FF", "label": "Alice Blue" }, { "color": "#FAEBD7", "label": "Antique White" }, { "color": "#7FFFD4", "label": "Aqua Marine" }, { "color": "#F0FFFF", "label": "Azure" }, { "color": "#F5F5DC", "label": "Beige" }, { "color": "#FFE4C4", "label": "Bisque" }, { "color": "#FFEBCD", "label": "Blanched Almond" }, { "color": "#0000FF", "label": "Blue" }, { "color": "#8A2BE2", "label": "Blue Violet" }, { "color": "#A52A2A", "label": "Brown" }, { "color": "#DEB887", "label": "Burly Wood" }, { "color": "#5F9EA0", "label": "Cadet Blue" }, { "color": "#7FFF00", "label": "Chartreuse" }, { "color": "#D2691E", "label": "Chocolate" }, { "color": "#FF7F50", "label": "Coral" }, { "color": "#6495ED", "label": "Cornflower Blue" }, { "color": "#FFF8DC", "label": "Cornsilk" }, { "color": "#DC143C", "label": "Crimson" }, { "color": "#00FFFF", "label": "Cyan" }, { "color": "#00008B", "label": "Dark Blue" }, { "color": "#008B8B", "label": "Dark Cyan" }, { "color": "#B8860B", "label": "Dark Golden Rod" }, { "color": "#A9A9A9", "label": "Dark Gray" }, { "color": "#006400", "label": "Dark Green" }, { "color": "#BDB76B", "label": "DarkKhaki" }, { "color": "#8B008B", "label": "Dark Magenta" }, { "color": "#556B2F", "label": "Dark Olive Green" }, { "color": "#FF8C00", "label": "Dark Orange" }, { "color": "#9932CC", "label": "Dark Orchid" }, { "color": "#8B0000", "label": "Dark Red" }, { "color": "#E9967A", "label": "Dark Salmon" }, { "color": "#8FBC8F", "label": "Dark Sea Green" }, { "color": "#483D8B", "label": "Dark Slate Blue" }, { "color": "#2F4F4F", "label": "Dark Slate Gray" }, { "color": "#00CED1", "label": "Dark Turquoise" }, { "color": "#9400D3", "label": "Dark Violet" }, { "color": "#FF1493", "label": "Deep Pink" }, { "color": "#00BFFF", "label": "Deep Sky Blue" }, { "color": "#696969", "label": "Dim Gray" }, { "color": "#1E90FF", "label": "Dodger Blue" }, { "color": "#B22222", "label": "Fire Brick" }, { "color": "#FFFAF0", "label": "Floral White" }, { "color": "#228B22", "label": "Forest Green" }, { "color": "#FF00FF", "label": "Fuchsia" }, { "color": "#DCDCDC", "label": "Gainsboro" }, { "color": "#F8F8F8", "label": "Ghost White" }, { "color": "#FFD700", "label": "Gold" }, { "color": "#DAA520", "label": "Golden Rod" }, { "color": "#808080", "label": "Gray" }, { "color": "#008800", "label": "Green" }, { "color": "#ADFF2F", "label": "Green Yellow" }, { "color": "#F0FFF0", "label": "Honey Dew" }, { "color": "#FF69B4", "label": "Hot Pink" }, { "color": "#CD5C5C", "label": "Indian Red" }, { "color": "#4B0082", "label": "Indigo" }, { "color": "#FFFFF0", "label": "Ivory" }, { "color": "#F0E68C", "label": "Khaki" }, { "color": "#E6E6FA", "label": "Lavender" }, { "color": "#FFF0F5", "label": "Lavender Blush" }, { "color": "#7CFC00", "label": "Lawn Green" }, { "color": "#FFFACD", "label": "Lemon Chiffon" }, { "color": "#ADD8E6", "label": "Light Blue" }, { "color": "#F08080", "label": "Light Coral" }, { "color": "#E0FFFF", "label": "Light Cyan" }, { "color": "#FAFAD2", "label": "Light Golden Rod Yellow" }, { "color": "#D3D3D3", "label": "Light Gray" }, { "color": "#90EE90", "label": "Light Green" }, { "color": "#FFB6C1", "label": "Light Pink" }, { "color": "#FFA07A", "label": "Light Salmon" }, { "color": "#20B2AA", "label": "Light Sea Green" }, { "color": "#87CEFA", "label": "Light Sky Blue" }, { "color": "#778899", "label": "Light Slate Gray" }, { "color": "#B0C4DE", "label": "Light Steel Blue" }, { "color": "#FFFFE0", "label": "Light Yellow" }, { "color": "#00FF00", "label": "Lime" }, { "color": "#32CD32", "label": "Lime Green" }, { "color": "#FAF0E6", "label": "Linen" }, { "color": "#800000", "label": "Maroon" }, { "color": "#66CDAA", "label": "Medium Aqua Marine" }, { "color": "#0000CD", "label": "Medium Blue" }, { "color": "#BA55D3", "label": "Medium Orchid" }, { "color": "#9370DB", "label": "Medium Purple" }, { "color": "#3CB371", "label": "Medium Sea Green" }, { "color": "#7B68EE", "label": "Medium Slate Blue" }, { "color": "#00FA9A", "label": "Medium Spring Green" }, { "color": "#48D1CC", "label": "Medium Turquoise" }, { "color": "#C71585", "label": "Medium Violet Red" }, { "color": "#191970", "label": "Midnight Blue" }, { "color": "#F5FFFA", "label": "Mint Cream" }, { "color": "#FFE4E1", "label": "Misty Rose" }, { "color": "#FFE4B5", "label": "Moccasin" }, { "color": "#FFDEAD", "label": "Navajo White" }, { "color": "#000080", "label": "Navy" }, { "color": "#FDF5E6", "label": "Old Lace" }, { "color": "#808000", "label": "Olive" }, { "color": "#6B8E23", "label": "Olive Drab" }, { "color": "#FFA500", "label": "Orange" }, { "color": "#FF4500", "label": "Orange Red" }, { "color": "#DA70D6", "label": "Orchid" }, { "color": "#EEE8AA", "label": "Pale Golden Rod" }, { "color": "#98FB98", "label": "Pale Green" }, { "color": "#AFEEEE", "label": "Pale Turquoise" }, { "color": "#DB7093", "label": "Pale Violet Red" }, { "color": "#FFEFD5", "label": "Papaya Whip" }, { "color": "#FFDAB9", "label": "Peach Puff" }, { "color": "#CD853F", "label": "Peru" }, { "color": "#FFC0CB", "label": "Pink" }, { "color": "#DDA0DD", "label": "Plum" }, { "color": "#B0E0E6", "label": "Powder Blue" }, { "color": "#800080", "label": "Purple" }, { "color": "#663399", "label": "Rebecca Purple" }, { "color": "#FF0000", "label": "Red" }, { "color": "#BC8F8F", "label": "RosyBrown" }, { "color": "#4169E1", "label": "Royal Blue" }, { "color": "#8B4513", "label": "Saddle Brown" }, { "color": "#FA8072", "label": "Salmon" }, { "color": "#F4A460", "label": "Sandy Brown" }, { "color": "#2E8B57", "label": "Sea Green" }, { "color": "#FFF5EE", "label": "Sea Shell" }, { "color": "#A0522D", "label": "Sienna" }, { "color": "#C0C0C0", "label": "Silver" }, { "color": "#87CEEB", "label": "Sky Blue" }, { "color": "#6A5ACD", "label": "Slate Blue" }, { "color": "#708090", "label": "Slate Gray" }, { "color": "#FFFAFA", "label": "Snow" }, { "color": "#00FF7F", "label": "Spring Green" }, { "color": "#4682B4", "label": "Steel Blue" }, { "color": "#D2B48C", "label": "Tan" }, { "color": "#008080", "label": "Teal" }, { "color": "#D8BFD8", "label": "Thistle" }, { "color": "#FF6347", "label": "Tomato" }, { "color": "#40E0D0", "label": "Turquoise" }, { "color": "#EE82EE", "label": "Violet" }, { "color": "#F5DEB3", "label": "Wheat" }, { "color": "#FFFFFF", "label": "White" }, { "color": "#F5F5F5", "label": "White Smoke" }, { "color": "#FFFF00", "label": "Yellow" }, { "color": "#9ACD32", "label": "Yellow Green" }]
	},
	fontBackgroundColor: {
		colors: [{ "color": "#000000", "label": "Black 1" }, { "color": "#ffffff", "label": "White 1" }, { "color": "#eeece1", "label": "Beige 1" }, { "color": "#1f497d", "label": "Blue 1" }, { "color": "#c0504d", "label": "Red 1" }, { "color": "#9bbb59", "label": "Green 1" }, { "color": "#8064a2", "label": "Purple 1" }, { "color": "#4bacc6", "label": "Cyan 1" }, { "color": "#f79646", "label": "Orange 1" }, { "color": "#ffff00", "label": "Yellow 1" }, { "color": "#7f7f7f", "label": "Black 2" }, { "color": "#f2f2f2", "label": "White 2" }, { "color": "#ddd9c3", "label": "Beige 2" }, { "color": "#c6d9f0", "label": "Blue 2" }, { "color": "#f2dcdb", "label": "Red 2" }, { "color": "#ebf1dd", "label": "Green 2" }, { "color": "#e5e0ec", "label": "Purple 2" }, { "color": "#dbeef3", "label": "Cyan 2" }, { "color": "#fdeada", "label": "Orange 2" }, { "color": "#fff2ca", "label": "Yellow 2" }, { "color": "#595959", "label": "Black 3" }, { "color": "#eeeeee", "label": "White 3" }, { "color": "#c4bd97", "label": "Beige 3" }, { "color": "#8db3e2", "label": "Blue 3" }, { "color": "#e5b9b7", "label": "Red 3" }, { "color": "#d7e3bc", "label": "Green 3" }, { "color": "#ccc1d9", "label": "Purple 3" }, { "color": "#b7dde8", "label": "Cyan 3" }, { "color": "#fbd5b5", "label": "Orange 3" }, { "color": "#ffe694", "label": "Yellow 3" }, { "color": "#444444", "label": "Black 4" }, { "color": "#d8d8d8", "label": "White 4" }, { "color": "#938953", "label": "Beige 4" }, { "color": "#548dd4", "label": "Blue 4" }, { "color": "#d99694", "label": "Red 4" }, { "color": "#c3d69b", "label": "Green 4" }, { "color": "#b2a2c7", "label": "Purple 4" }, { "color": "#a3d4e0", "label": "Cyan 4" }, { "color": "#fac08f", "label": "Orange 4" }, { "color": "#f2c314", "label": "Yellow 4" }, { "color": "#333333", "label": "Black 5" }, { "color": "#cccccc", "label": "White 5" }, { "color": "#494429", "label": "Beige 5" }, { "color": "#17365d", "label": "Blue 5" }, { "color": "#953734", "label": "Red 5" }, { "color": "#76923c", "label": "Green 5" }, { "color": "#5f497a", "label": "Purple 5" }, { "color": "#92cddc", "label": "Cyan 5" }, { "color": "#e36c09", "label": "Orange 5" }, { "color": "#c09100", "label": "Yellow 5" }, { "color": "#222222", "label": "Black 6" }, { "color": "#a5a5a5", "label": "White 6" }, { "color": "#33301c", "label": "Beige 6" }, { "color": "#0f243e", "label": "Blue 6" }, { "color": "#632423", "label": "Red 6" }, { "color": "#4f6128", "label": "Green 6" }, { "color": "#3f3151", "label": "Purple 6" }, { "color": "#31859b", "label": "Cyan 6" }, { "color": "#974806", "label": "Orange 6" }, { "color": "#7f6000", "label": "Yellow 6" }]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
