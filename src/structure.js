export const structure = [
    {
        type: "folder",
        name: "Instruments",
        childrens: [
            {
                type: "folder",
                name: "Fender",
                childrens: [
                    { type: "folder", name: "Acoustic guitar", childrens: [{ type: "file", name: "file 1" }, { type: "file", name: "file 2" }] },
                    { type: "folder", name: "Electric guitar", childrens: [{ type: "file", name: "file 3" }, { type: "file", name: "file 4" }] }
                ]
            },
            { type: "folder", name: "Yamaha", childrens: [{ type: "file", name: "file 5" }, { type: "file", name: "file 6" }] },
        ]
    },
    { type: "folder", name: "Songs" }
];