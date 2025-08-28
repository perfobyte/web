
var
    perfobyte = {
        is: "messanger",
        domain: "perfobyte.com",
        kernel: "PerfoByte SDK",
        policy: "PerfoByte policy",

        module: {
            url: (
                (system, module_name) => {
                    return (`${module_name}.${system}.${perfobyte.domain}`);
                }
            ),
        }
    },

    join = (c,d ) => ( c + " and " + d ),
    not = (a) => ("not ( " + a + " )"),
    is = (a,b) => ("(\n\n    " + a + "\n\n) is (\n\n    " + b + "\n\n)"),

    terminator = "program, which could change yourself",
    official = "program in official app market",

    official_terminator = join(official, terminator),

    static_app = join(perfobyte.kernel, not(terminator)),

    distributor = join(not(official), terminator),

    official_static_app = join(official, static_app),

    domain_terminator = (
        is(terminator, static_app) + ", which is for each subdomain"
    ),

    include_rd = (r,p) => {
        var p1 = p[1];
        return (
            r
            +p[0]
            + (
                p1.length > 0
                ? (" = ( " + p1.join(", ") + " )")
                : ""
            )
            +", "
        );
    },

    include = (
        (a,l) => {
            return (a + " includes: " + l.reduce(include_rd,""));
        }
    ),

    official_terminator_builds = [
        [
            "Windows_Store_Win32",
            [
                `specify it in ${perfobyte.policy} and own updater in it`,
            ]
        ]
    ],

    NONE = []
;

console.log(
    [
        include(domain_terminator, [
            ["browser", [
                `updater.${perfobyte.domain}`,
            ]]
        ]),

        'PerfoByte Installer for:\n\n',
        
        include(official_terminator, official_terminator_builds),

        include(distributor, [
            ["linux", NONE],
            ["macos", NONE],
            ...official_terminator_builds,
        ]),
        
    ]
    .join("\n\n\n\n")
)
