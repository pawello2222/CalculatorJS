using System.Web;
using System.Web.Optimization;

namespace CalculatorJS
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles( BundleCollection bundles )
        {
            bundles.Add( new StyleBundle( "~/Content/css" ).Include(
                      "~/Content/Site.css" ) );

            bundles.Add( new ScriptBundle( "~/bundles/modernizr" ).Include(
                        "~/Scripts/modernizr-*" ) );

            bundles.Add( new ScriptBundle( "~/bundles/bootstrap" ).Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js" ) );

            bundles.Add( new ScriptBundle( "~/bundles/calculatorApp" )
                    .IncludeDirectory( "~/Scripts/Models", "*.js" )
                    .IncludeDirectory( "~/Scripts/Controllers", "*.js" )
                    .Include( "~/Scripts/Calculator.js" ) );
        }
    }
}
