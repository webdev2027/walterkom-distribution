# /* ==========================================================================
#  * file          020_ext_gridelements.ts
#  * info          Ext. gridelements
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           19-03-08
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */

/* https://docs.typo3.org/typo3cms/extensions/gridelements/stable/Chapters/DataProcessing/Index.html */
/*
lib.gridelements.defaultGridSetup =< lib.contentElement
lib.gridelements.defaultGridSetup {
    templateName.field = tx_gridelements_backend_layout
    templateName.ifEmpty = GridElement
    layoutRootPaths {
        1 = EXT:gridelements/Resources/Private/Layouts/
    }
    partialRootPaths {
        1 = EXT:gridelements/Resources/Private/Partials/
    }
    templateRootPaths {
        1 = EXT:gridelements/Resources/Private/Templates/
    }
    dataProcessing {
        10 = GridElementsTeam\Gridelements\DataProcessing\GridChildrenProcessor
        10 {
            GridContainer {
                as = columncontent
                options {
                    resolveFlexFormData = 1
                    respectRows = 0
                }
            }
            accordion {
                as = accordionitems
                options {
                    resolveFlexFormData = 1
                    respectRows = 0
                    respectColumns = 0
                }
            }
        }
    }
}
*/
// loaded ts after install the ext:gridelements


@import 'EXT:gridelements/Configuration/TypoScript/setup.typoscript'
//[userFunc = TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('gridelements')]
//    <INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts" extensions="ts">
//[global]

tt_content.gridelements_pi1 =< lib.contentElement
    tt_content.gridelements_pi1 {
    templateName = Generic
    variables {
        content =< tt_content.gridelements_view
    }
}

tt_content {
    gridelements_pi1 = COA
    gridelements_pi1 {
        20 {
            10 {
                setup {
                    GridSection < lib.gridelements.defaultGridSetup
                    GridSection {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridSection.html
                        }
                    }

                    GridContainer < lib.gridelements.defaultGridSetup
                    GridContainer {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridContainer.html
                        }
                    }


                    GridTwoColumns < lib.gridelements.defaultGridSetup
                    GridTwoColumns {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridTwoColumns.html
                        }
                    }


                    GridThreeColumns < lib.gridelements.defaultGridSetup
                    GridThreeColumns {
                        cObject = FLUIDTEMPLATE
                        cObject {
                            file = {$extensionsRoot}Gridelements/GridThreeColumns.html
                        }
                    }
                }
            }
        }
    }
}

tt_content.gridelements_view < tt_content.gridelements_pi1

