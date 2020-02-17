(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{201:function(e,t,o){e.exports=o.p+"assets/img/outline-explorer.3bc97ad2.gif"},202:function(e,t,o){e.exports=o.p+"assets/img/code-complete.11c1397c.gif"},203:function(e,t,o){e.exports=o.p+"assets/img/declaration-hover.eca28ff4.gif"},204:function(e,t,o){e.exports=o.p+"assets/img/preview-cpy.b4e0f27e.gif"},205:function(e,t,o){e.exports=o.p+"assets/img/peek-references.fa724b2e.gif"},206:function(e,t,o){e.exports=o.p+"assets/img/peek-definition.b54399bf.gif"},218:function(e,t,o){"use strict";o.r(t);var i=o(0),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"making-code-changes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#making-code-changes","aria-hidden":"true"}},[e._v("#")]),e._v(" Making code changes")]),e._v(" "),i("p",[e._v("IBM Z® Open Editor supports COBOL and PL/I editing. Select a program, copybook, include, or JCL file in the Explorer to open it in the editor.")]),e._v(" "),i("p",[e._v("With the syntax highlighting capability, you can quickly distinguish between COBOL and PL/I reserved words, comments, constants, and variables. With gray lines, which mark the COBOL and PL/I areas, you can better determine correct areas for comments, boundaries for coding in areas A and B, and so on.")]),e._v(" "),i("p",[e._v("The editor provides the following features and capabilities:")]),e._v(" "),i("h2",{attrs:{id:"browsing-code-by-using-the-outline-view"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#browsing-code-by-using-the-outline-view","aria-hidden":"true"}},[e._v("#")]),e._v(" Browsing code by using the Outline view")]),e._v(" "),i("p",[e._v("As you view the source, you can use the Outline view to efficiently explore and navigate the code of the program. By looking through the items in this view, you can get an idea of what the program does at a high level.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(201),alt:"Illustration of using the Outline view"}})]),e._v(" "),i("p",[i("strong",[e._v("How to use it")])]),e._v(" "),i("p",[e._v("You can use the Outline view only after you have opened a file or program. If the Outline view is not already expanded, you can open it by clicking "),i("strong",[e._v("View > Open view > Outline")]),e._v(".")]),e._v(" "),i("p",[e._v("You can use this view to:")]),e._v(" "),i("ul",[i("li",[e._v("Expand and collapse sections such as Division Headings, Section Headings, and Variable Group Names in the Outline View.")]),e._v(" "),i("li",[e._v("Recognize includes, procedures, loops quickly via the icons located by the various items.")]),e._v(" "),i("li",[e._v("Go to a wanted location in the code by clicking that section header in the view.")]),e._v(" "),i("li",[e._v("Sort by Position, Name, or Type.")]),e._v(" "),i("li",[e._v("Search for identifiers within the outline by pressing Ctrl+Shift+O (Windows), or Cmd+Shift+O (Mac) within the Editor window.")])]),e._v(" "),i("p",[e._v("When you move your cursor over the program, outline nodes are automatically selected. To toggle this and other features related to the Outline View, hover over the upper right corner of the Outline View. You can see the option "),i("strong",[e._v("...")]),e._v(", where you can click to find multiple options to organize your outline view such as Follow on Cursor, Filter by Type and Sort by Name, Position, and Type.")]),e._v(" "),i("h2",{attrs:{id:"code-and-variable-completion-suggestion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-and-variable-completion-suggestion","aria-hidden":"true"}},[e._v("#")]),e._v(" Code and variable completion suggestion")]),e._v(" "),i("p",[e._v("When you are typing code, code completion suggestion provides you with a matching list from which you can select commands, defined variable and paragraph names, and code snippets.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(202),alt:"Illustration of code and variable completion"}})]),e._v(" "),i("p",[i("strong",[e._v("How to use it")])]),e._v(" "),i("p",[e._v("The code completion suggestion is displayed automatically while you are typing or when you press Ctrl+Space (Windows and Mac) depending on your preferences settings.")]),e._v(" "),i("h2",{attrs:{id:"hovering-for-declaration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#hovering-for-declaration","aria-hidden":"true"}},[e._v("#")]),e._v(" Hovering for declaration")]),e._v(" "),i("p",[e._v("You can see the working storage definition or DCL definition and the parent group of a variable or paragraph name by moving your mouse cursor over to the variable or paragraph name.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(203),alt:"Illustration of hovering for declaration"}})]),e._v(" "),i("p",[i("strong",[e._v("How to use it")])]),e._v(" "),i("p",[e._v("The declaration hover is enabled by default.")]),e._v(" "),i("h2",{attrs:{id:"previewing-copybooks-and-include-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#previewing-copybooks-and-include-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Previewing copybooks and include files")]),e._v(" "),i("p",[e._v("You can preview the contents of a copybook or include file by moving your mouse cursor over the copybook name in a "),i("strong",[i("code",[e._v("COPY")])]),e._v(" statement in COBOL or the include file in a "),i("strong",[i("code",[e._v("%INCLUDE")])]),e._v(" statement in PL/I, without having to navigate away from the file you are working in.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(204),alt:"Illustration of previewing copybooks and include files"}})]),e._v(" "),i("p",[i("strong",[e._v("How to use it")])]),e._v(" "),i("p",[e._v("You must specify the filepath to the copybooks or include files in your settings to resolve the references. If no filepath is specified or the copybooks or include files are not found in the provided filepath, an error (red squiggle) is shown.")]),e._v(" "),i("p",[e._v("To resolve this, add the filepath to the references in the "),i("strong",[i("code",[e._v("zopeneditor.propertygroups")])]),e._v(" section of your "),i("code",[e._v("settings.json")]),e._v(" settings as follows.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Open your settings:")]),e._v(" "),i("ul",[i("li",[e._v("Windows: "),i("strong",[e._v("File > Preferences > Settings")])]),e._v(" "),i("li",[e._v("Mac: "),i("strong",[e._v("Code > Preferences > Settings")])])])]),e._v(" "),i("li",[i("p",[e._v("In the left side of the opened Settings interface, expand "),i("strong",[e._v("Extensions")]),e._v(" from the list of categories, and click "),i("strong",[e._v("IBM Z Open Editor")]),e._v(". In the IBM Z Open Editor settings, under "),i("strong",[e._v("Propertygroups")]),e._v(", click "),i("strong",[e._v("Edit in settings.json")]),e._v(" to open the "),i("code",[e._v("settings.json")]),e._v(" file.")])]),e._v(" "),i("li",[i("p",[e._v("Edit the "),i("code",[e._v("settings.json")]),e._v(" file to specify filepaths to folders that contain copybooks or include files in the "),i("strong",[i("code",[e._v("syslib")])]),e._v(" field. You can hover over the field names (such as "),i("strong",[i("code",[e._v("name")])]),e._v(", "),i("strong",[i("code",[e._v("type")])]),e._v(") to view details about what kind of information is expected for each field.")]),e._v(" "),i("p",[e._v("You can refer to the examples and supported patterns in "),i("router-link",{attrs:{to:"/Docs/setting_propertygroup.html"}},[e._v("Setting property groups")]),e._v(".")],1)]),e._v(" "),i("li",[i("p",[e._v("Save the "),i("code",[e._v("settings.json")]),e._v(" file by selecting "),i("strong",[e._v("File > Save")]),e._v(".")])])]),e._v(" "),i("p",[e._v("If you have installed Zowe CLI, you can define a search path to resolve copybooks over the network against your remote MVS data sets or even USS directories (COBOL only at the moment).")]),e._v(" "),i("p",[e._v("To open the file in a separate editor, press Ctrl+Click (Windows) or Cmd+Click (Mac).")]),e._v(" "),i("h2",{attrs:{id:"operations-on-variable-and-paragraph-names"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#operations-on-variable-and-paragraph-names","aria-hidden":"true"}},[e._v("#")]),e._v(" Operations on variable and paragraph names")]),e._v(" "),i("p",[e._v("When you double-click a variable or paragraph name to highlight the entire name and then right-click it, you can see the available operations.")]),e._v(" "),i("p",[i("strong",[e._v("How to use it")])]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Click "),i("strong",[e._v("Change All Occurrences")]),e._v(": Ctrl+F2 (Windows) or Cmd+F2 (Mac)")]),e._v(" "),i("p",[e._v("When you type the new name, all occurrences are changed simultaneously.")]),e._v(" "),i("p",[i("strong",[e._v("NOTE")]),e._v(": In the scroll bar on the right side of the editor, each occurrence is noted with a location bar.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Find All References")]),e._v(": Alt+Shift+F12 (Windows) or Option+Shift+F12(Mac)")]),e._v(" "),i("p",[e._v("A Results References view for the variable or paragraph is displayed on the left side of the screen. Click any result to go to that location in the file.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Peek References")]),e._v(": Shift+F12 (Windows and Mac)")]),e._v(" "),i("p",[e._v("This opens a Results References view in the CodeLens box underneath the variable or paragraph. Click any result to go to that location in the file.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(205),alt:"Illustration of peeking references"}})])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Go to Definition")]),e._v(": F12 (Windows and Mac)")]),e._v(" "),i("p",[e._v("Go to the location where the variable or paragraph is defined. It opens the copybook or include file if applicable.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Go to Symbol")]),e._v(": Ctrl+Shift+O (Windows) or Cmd+Shift+O (Mac)")]),e._v(" "),i("p",[e._v("When you enter an object name in the search bar or you scroll through the items to select the object, the cursor is moved to that location.")])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Peek Definition")]),e._v(": Alt+F12 (Windows) or Option+F12 (Mac)")]),e._v(" "),i("p",[e._v("This opens a CodeLens box that shows where the variable or paragraph was defined in the code. If you use the keyboard shortcut Alt+F12 (Windows) or Option+F12 (Mac), the variable or paragraph name is only clicked once before the keyboard shortcuts are pressed. Double-click any result to go to that location in the file.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(206),alt:"Illustration of peeking definition"}})])]),e._v(" "),i("li",[i("p",[e._v("Click "),i("strong",[e._v("Rename Symbol")]),e._v(": F2 (Windows and Mac)")]),e._v(" "),i("p",[e._v("Rename the selected symbol, and the changes are done in the whole program and copybook or include if it is attached to that symbol.")])])]),e._v(" "),i("h2",{attrs:{id:"syntax-checking"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#syntax-checking","aria-hidden":"true"}},[e._v("#")]),e._v(" Syntax checking")]),e._v(" "),i("p",[e._v("The syntax checking feature underlines unrecognized statements and expressions in red, which helps you to make quick corrections and reduce compile errors.")]),e._v(" "),i("p",[e._v("Syntax checking also works for misspelled COBOL and PL/I reserved words and unknown variable names.")]),e._v(" "),i("p",[i("strong",[e._v("How to use it")])]),e._v(" "),i("p",[e._v("To see all the syntax errors in the open files, open the Problems view through the View menu or by clicking the error and warning icon at the bottom in the status bar. Double-click the list item to directly go to the problem.")]),e._v(" "),i("h2",{attrs:{id:"undoing-and-redoing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#undoing-and-redoing","aria-hidden":"true"}},[e._v("#")]),e._v(" Undoing and redoing")]),e._v(" "),i("p",[e._v("Undo your changes by pressing Ctrl+Z (Windows) or Cmd+Z (Mac). Redo your changes by pressing Ctrl+Shift+Z (Windows) or Cmd+Shift+Z (Mac).")])])}),[],!1,null,null,null);t.default=n.exports}}]);