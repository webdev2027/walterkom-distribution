# /* ==========================================================================
#  * file          lib.navSocial.ts
#  * info          social/footer navigation
#  *
#  *
#  * url			hellotypo3.de
#  * client         hellotypo3
#  * date           18-08-10
#  *
#  * author         ssa :: hello@hellotypo3.de
#  *
#  * ========================================================================== */

temp.currentYear = TEXT
temp.currentYear {
  data = date : U
  strftime = %Y
  noTrimWrap = |&copy; | WALTERKOM|
}

lib.navSocial = COA
lib.navSocial {

    ###15 < temp.currentYear

    10 = TEXT
    10.value (
        <div class="clearfix">
    )

    20 = HMENU
    20 {
        special = directory
        special.value = 10
        1 = TMENU
        1 {
            wrap = <div class="clearfix">|</div>

            NO = 1
            NO {
                stdWrap.field = nav_title // title
                #wrapItemAndSub = <li class="list-inline-item">|</li>
            }
        }
    }

    90 = TEXT
    90.value (
        </div>
    )

    15 = TEXT
    15.value (

        <a href="https://www.facebook.com/Walter-Kommunikation-511531845692604/" class="social-icon-sm si-dark si-gray-round si-colored-facebook">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/walter_kom" class="social-icon-sm si-dark si-gray-round si-colored-twitter">
            <i class="fa fa-twitter"></i>
            <i class="fa fa-twitter"></i>
        </a>
        <a href="https://www.xing.com/profil/walter47" class="social-icon-sm si-dark si-gray-round si-colored-xing">
            <i class="fa fa-xing"></i>
            <i class="fa fa-xing"></i>
        </a>

    )
    /*
    30 = HMENU
    30 {
        special = directory
        special.value = {$navSocial}

        1 = TMENU
        1 {
            wrap = <div class="clearfix">|</div>

            NO = 1
            NO {
                stdWrap.field = nav_title // title
                wrapItemAndSub = <li class="list-inline-item">|</li>
            }
        }
    }
    */
}