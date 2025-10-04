
custom prompt or midi prompt

```json
{
    "named_endpoints": {
        "/lambda": {
            "parameters": [],
            "returns": [],
            "show_api": true
        },
        "/lambda_1": {
            "parameters": [],
            "returns": [],
            "show_api": true
        },
        "/lambda_2": {
            "parameters": [],
            "returns": [],
            "show_api": true
        },
        "/run": {
            "parameters": [
                {
                    "label": "select model",
                    "parameter_name": "model_name",
                    "parameter_has_default": true,
                    "parameter_default": "generic pretrain model (tv2o-medium) by skytnt",
                    "type": {
                        "type": "string",
                        "enum": [
                            "generic pretrain model (tv2o-medium) by skytnt",
                            "generic pretrain model (tv2o-medium) by skytnt with jpop lora",
                            "generic pretrain model (tv2o-medium) by skytnt with touhou lora",
                            "generic pretrain model (tv2o-medium) by breadlicker45",
                            "generic pretrain model (tv2o-large) by asigalov61",
                            "generic pretrain model (tv2o-medium) by asigalov61",
                            "generic pretrain model (tv1-medium) by skytnt"
                        ]
                    },
                    "python_type": {
                        "type": "Literal['generic pretrain model (tv2o-medium) by skytnt', 'generic pretrain model (tv2o-medium) by skytnt with jpop lora', 'generic pretrain model (tv2o-medium) by skytnt with touhou lora', 'generic pretrain model (tv2o-medium) by breadlicker45', 'generic pretrain model (tv2o-large) by asigalov61', 'generic pretrain model (tv2o-medium) by asigalov61', 'generic pretrain model (tv1-medium) by skytnt']",
                        "description": ""
                    },
                    "component": "Dropdown",
                    "example_input": "generic pretrain model (tv2o-medium) by skytnt"
                },
                {
                    "component": "state",
                    "example": null,
                    "parameter_default": null,
                    "parameter_has_default": true,
                    "parameter_name": null,
                    "hidden": true
                },
                {
                    "component": "state",
                    "example": null,
                    "parameter_default": null,
                    "parameter_has_default": true,
                    "parameter_name": null,
                    "hidden": true
                },
                {
                    "component": "state",
                    "example": null,
                    "parameter_default": null,
                    "parameter_has_default": true,
                    "parameter_name": null,
                    "hidden": true
                },
                {
                    "label": "select output to continue generating",
                    "parameter_name": "continuation_select",
                    "parameter_has_default": true,
                    "parameter_default": "all",
                    "type": {
                        "enum": [
                            "all",
                            "output1",
                            "output2",
                            "output3",
                            "output4",
                            "output5",
                            "output6",
                            "output7",
                            "output8"
                        ],
                        "title": "Radio",
                        "type": "string"
                    },
                    "python_type": {
                        "type": "Literal['all', 'output1', 'output2', 'output3', 'output4', 'output5', 'output6', 'output7', 'output8']",
                        "description": ""
                    },
                    "component": "Radio",
                    "example_input": "all"
                },
                {
                    "label": "🪗instruments (auto if empty)",
                    "parameter_name": "instruments",
                    "parameter_has_default": true,
                    "parameter_default": [],
                    "type": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "enum": [
                                "Acoustic Grand",
                                "Bright Acoustic",
                                "Electric Grand",
                                "Honky-Tonk",
                                "Electric Piano 1",
                                "Electric Piano 2",
                                "Harpsichord",
                                "Clav",
                                "Celesta",
                                "Glockenspiel",
                                "Music Box",
                                "Vibraphone",
                                "Marimba",
                                "Xylophone",
                                "Tubular Bells",
                                "Dulcimer",
                                "Drawbar Organ",
                                "Percussive Organ",
                                "Rock Organ",
                                "Church Organ",
                                "Reed Organ",
                                "Accordion",
                                "Harmonica",
                                "Tango Accordion",
                                "Acoustic Guitar(nylon)",
                                "Acoustic Guitar(steel)",
                                "Electric Guitar(jazz)",
                                "Electric Guitar(clean)",
                                "Electric Guitar(muted)",
                                "Overdriven Guitar",
                                "Distortion Guitar",
                                "Guitar Harmonics",
                                "Acoustic Bass",
                                "Electric Bass(finger)",
                                "Electric Bass(pick)",
                                "Fretless Bass",
                                "Slap Bass 1",
                                "Slap Bass 2",
                                "Synth Bass 1",
                                "Synth Bass 2",
                                "Violin",
                                "Viola",
                                "Cello",
                                "Contrabass",
                                "Tremolo Strings",
                                "Pizzicato Strings",
                                "Orchestral Harp",
                                "Timpani",
                                "String Ensemble 1",
                                "String Ensemble 2",
                                "SynthStrings 1",
                                "SynthStrings 2",
                                "Choir Aahs",
                                "Voice Oohs",
                                "Synth Voice",
                                "Orchestra Hit",
                                "Trumpet",
                                "Trombone",
                                "Tuba",
                                "Muted Trumpet",
                                "French Horn",
                                "Brass Section",
                                "SynthBrass 1",
                                "SynthBrass 2",
                                "Soprano Sax",
                                "Alto Sax",
                                "Tenor Sax",
                                "Baritone Sax",
                                "Oboe",
                                "English Horn",
                                "Bassoon",
                                "Clarinet",
                                "Piccolo",
                                "Flute",
                                "Recorder",
                                "Pan Flute",
                                "Blown Bottle",
                                "Skakuhachi",
                                "Whistle",
                                "Ocarina",
                                "Lead 1 (square)",
                                "Lead 2 (sawtooth)",
                                "Lead 3 (calliope)",
                                "Lead 4 (chiff)",
                                "Lead 5 (charang)",
                                "Lead 6 (voice)",
                                "Lead 7 (fifths)",
                                "Lead 8 (bass+lead)",
                                "Pad 1 (new age)",
                                "Pad 2 (warm)",
                                "Pad 3 (polysynth)",
                                "Pad 4 (choir)",
                                "Pad 5 (bowed)",
                                "Pad 6 (metallic)",
                                "Pad 7 (halo)",
                                "Pad 8 (sweep)",
                                "FX 1 (rain)",
                                "FX 2 (soundtrack)",
                                "FX 3 (crystal)",
                                "FX 4 (atmosphere)",
                                "FX 5 (brightness)",
                                "FX 6 (goblins)",
                                "FX 7 (echoes)",
                                "FX 8 (sci-fi)",
                                "Sitar",
                                "Banjo",
                                "Shamisen",
                                "Koto",
                                "Kalimba",
                                "Bagpipe",
                                "Fiddle",
                                "Shanai",
                                "Tinkle Bell",
                                "Agogo",
                                "Steel Drums",
                                "Woodblock",
                                "Taiko Drum",
                                "Melodic Tom",
                                "Synth Drum",
                                "Reverse Cymbal",
                                "Guitar Fret Noise",
                                "Breath Noise",
                                "Seashore",
                                "Bird Tweet",
                                "Telephone Ring",
                                "Helicopter",
                                "Applause",
                                "Gunshot"
                            ]
                        }
                    },
                    "python_type": {
                        "type": "list[Literal['Acoustic Grand', 'Bright Acoustic', 'Electric Grand', 'Honky-Tonk', 'Electric Piano 1', 'Electric Piano 2', 'Harpsichord', 'Clav', 'Celesta', 'Glockenspiel', 'Music Box', 'Vibraphone', 'Marimba', 'Xylophone', 'Tubular Bells', 'Dulcimer', 'Drawbar Organ', 'Percussive Organ', 'Rock Organ', 'Church Organ', 'Reed Organ', 'Accordion', 'Harmonica', 'Tango Accordion', 'Acoustic Guitar(nylon)', 'Acoustic Guitar(steel)', 'Electric Guitar(jazz)', 'Electric Guitar(clean)', 'Electric Guitar(muted)', 'Overdriven Guitar', 'Distortion Guitar', 'Guitar Harmonics', 'Acoustic Bass', 'Electric Bass(finger)', 'Electric Bass(pick)', 'Fretless Bass', 'Slap Bass 1', 'Slap Bass 2', 'Synth Bass 1', 'Synth Bass 2', 'Violin', 'Viola', 'Cello', 'Contrabass', 'Tremolo Strings', 'Pizzicato Strings', 'Orchestral Harp', 'Timpani', 'String Ensemble 1', 'String Ensemble 2', 'SynthStrings 1', 'SynthStrings 2', 'Choir Aahs', 'Voice Oohs', 'Synth Voice', 'Orchestra Hit', 'Trumpet', 'Trombone', 'Tuba', 'Muted Trumpet', 'French Horn', 'Brass Section', 'SynthBrass 1', 'SynthBrass 2', 'Soprano Sax', 'Alto Sax', 'Tenor Sax', 'Baritone Sax', 'Oboe', 'English Horn', 'Bassoon', 'Clarinet', 'Piccolo', 'Flute', 'Recorder', 'Pan Flute', 'Blown Bottle', 'Skakuhachi', 'Whistle', 'Ocarina', 'Lead 1 (square)', 'Lead 2 (sawtooth)', 'Lead 3 (calliope)', 'Lead 4 (chiff)', 'Lead 5 (charang)', 'Lead 6 (voice)', 'Lead 7 (fifths)', 'Lead 8 (bass+lead)', 'Pad 1 (new age)', 'Pad 2 (warm)', 'Pad 3 (polysynth)', 'Pad 4 (choir)', 'Pad 5 (bowed)', 'Pad 6 (metallic)', 'Pad 7 (halo)', 'Pad 8 (sweep)', 'FX 1 (rain)', 'FX 2 (soundtrack)', 'FX 3 (crystal)', 'FX 4 (atmosphere)', 'FX 5 (brightness)', 'FX 6 (goblins)', 'FX 7 (echoes)', 'FX 8 (sci-fi)', 'Sitar', 'Banjo', 'Shamisen', 'Koto', 'Kalimba', 'Bagpipe', 'Fiddle', 'Shanai', 'Tinkle Bell', 'Agogo', 'Steel Drums', 'Woodblock', 'Taiko Drum', 'Melodic Tom', 'Synth Drum', 'Reverse Cymbal', 'Guitar Fret Noise', 'Breath Noise', 'Seashore', 'Bird Tweet', 'Telephone Ring', 'Helicopter', 'Applause', 'Gunshot']]",
                        "description": ""
                    },
                    "component": "Dropdown",
                    "example_input": [
                        "Acoustic Grand"
                    ]
                },
                {
                    "label": "🥁drum kit",
                    "parameter_name": "drum_kit",
                    "parameter_has_default": true,
                    "parameter_default": "None",
                    "type": {
                        "type": "string",
                        "enum": [
                            "None",
                            "Standard",
                            "Room",
                            "Power",
                            "Electric",
                            "TR-808",
                            "Jazz",
                            "Blush",
                            "Orchestra"
                        ]
                    },
                    "python_type": {
                        "type": "Literal['None', 'Standard', 'Room', 'Power', 'Electric', 'TR-808', 'Jazz', 'Blush', 'Orchestra']",
                        "description": ""
                    },
                    "component": "Dropdown",
                    "example_input": "None"
                },
                {
                    "label": "BPM (beats per minute, auto if 0)",
                    "parameter_name": "bpm",
                    "parameter_has_default": true,
                    "parameter_default": 0,
                    "type": {
                        "type": "number",
                        "description": "numeric value between 0 and 255"
                    },
                    "python_type": {
                        "type": "float",
                        "description": ""
                    },
                    "component": "Slider",
                    "example_input": 0
                },
                {
                    "label": "time signature (only for tv2 models)",
                    "parameter_name": "time_sig",
                    "parameter_has_default": true,
                    "parameter_default": "auto",
                    "type": {
                        "enum": [
                            "auto",
                            "4/4",
                            "2/4",
                            "3/4",
                            "6/4",
                            "7/4",
                            "2/2",
                            "3/2",
                            "4/2",
                            "3/8",
                            "5/8",
                            "6/8",
                            "7/8",
                            "9/8",
                            "12/8"
                        ],
                        "title": "Radio",
                        "type": "string"
                    },
                    "python_type": {
                        "type": "Literal['auto', '4/4', '2/4', '3/4', '6/4', '7/4', '2/2', '3/2', '4/2', '3/8', '5/8', '6/8', '7/8', '9/8', '12/8']",
                        "description": ""
                    },
                    "component": "Radio",
                    "example_input": "auto"
                },
                {
                    "label": "key signature (only for tv2 models)",
                    "parameter_name": "key_sig",
                    "parameter_has_default": true,
                    "parameter_default": "auto",
                    "type": {
                        "enum": [
                            "auto",
                            "C♭",
                            "A♭m",
                            "G♭",
                            "E♭m",
                            "D♭",
                            "B♭m",
                            "A♭",
                            "Fm",
                            "E♭",
                            "Cm",
                            "B♭",
                            "Gm",
                            "F",
                            "Dm",
                            "C",
                            "Am",
                            "G",
                            "Em",
                            "D",
                            "Bm",
                            "A",
                            "F♯m",
                            "E",
                            "C♯m",
                            "B",
                            "G♯m",
                            "F♯",
                            "D♯m",
                            "C♯",
                            "A♯m"
                        ],
                        "title": "Radio",
                        "type": "string"
                    },
                    "python_type": {
                        "type": "Literal['auto', 'C♭', 'A♭m', 'G♭', 'E♭m', 'D♭', 'B♭m', 'A♭', 'Fm', 'E♭', 'Cm', 'B♭', 'Gm', 'F', 'Dm', 'C', 'Am', 'G', 'Em', 'D', 'Bm', 'A', 'F♯m', 'E', 'C♯m', 'B', 'G♯m', 'F♯', 'D♯m', 'C♯', 'A♯m']",
                        "description": ""
                    },
                    "component": "Radio",
                    "example_input": "auto"
                },
                {
                    "label": "input midi",
                    "parameter_name": "mid",
                    "parameter_has_default": false,
                    "parameter_default": null,
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "component": "File",
                    "example_input": {
                        "path": "https://github.com/gradio-app/gradio/raw/main/test/test_files/sample_file.pdf",
                        "meta": {
                            "_type": "gradio.FileData"
                        },
                        "orig_name": "sample_file.pdf",
                        "url": "https://github.com/gradio-app/gradio/raw/main/test/test_files/sample_file.pdf"
                    }
                },
                {
                    "label": "use first n midi events as prompt",
                    "parameter_name": "midi_events",
                    "parameter_has_default": true,
                    "parameter_default": 128,
                    "type": {
                        "type": "number",
                        "description": "numeric value between 1 and 512"
                    },
                    "python_type": {
                        "type": "float",
                        "description": ""
                    },
                    "component": "Slider",
                    "example_input": 1
                },
                {
                    "label": "reduce control_change and set_tempo events",
                    "parameter_name": "reduce_cc_st",
                    "parameter_has_default": true,
                    "parameter_default": true,
                    "type": {
                        "type": "boolean"
                    },
                    "python_type": {
                        "type": "bool",
                        "description": ""
                    },
                    "component": "Checkbox",
                    "example_input": true
                },
                {
                    "label": "remap tracks and channels so each track has only one channel and in order",
                    "parameter_name": "remap_track_channel",
                    "parameter_has_default": true,
                    "parameter_default": true,
                    "type": {
                        "type": "boolean"
                    },
                    "python_type": {
                        "type": "bool",
                        "description": ""
                    },
                    "component": "Checkbox",
                    "example_input": true
                },
                {
                    "label": "add a default instrument to channels that don't have an instrument",
                    "parameter_name": "add_default_instr",
                    "parameter_has_default": true,
                    "parameter_default": true,
                    "type": {
                        "type": "boolean"
                    },
                    "python_type": {
                        "type": "bool",
                        "description": ""
                    },
                    "component": "Checkbox",
                    "example_input": true
                },
                {
                    "label": "remove channels without notes",
                    "parameter_name": "remove_empty_channels",
                    "parameter_has_default": true,
                    "parameter_default": false,
                    "type": {
                        "type": "boolean"
                    },
                    "python_type": {
                        "type": "bool",
                        "description": ""
                    },
                    "component": "Checkbox",
                    "example_input": true
                },
                {
                    "label": "seed",
                    "parameter_name": "seed",
                    "parameter_has_default": true,
                    "parameter_default": 0,
                    "type": {
                        "type": "number",
                        "description": "numeric value between 0 and 2147483647"
                    },
                    "python_type": {
                        "type": "float",
                        "description": ""
                    },
                    "component": "Slider",
                    "example_input": 0
                },
                {
                    "label": "random seed",
                    "parameter_name": "seed_rand",
                    "parameter_has_default": true,
                    "parameter_default": true,
                    "type": {
                        "type": "boolean"
                    },
                    "python_type": {
                        "type": "bool",
                        "description": ""
                    },
                    "component": "Checkbox",
                    "example_input": true
                },
                {
                    "label": "generate max n midi events",
                    "parameter_name": "gen_events",
                    "parameter_has_default": true,
                    "parameter_default": 512,
                    "type": {
                        "type": "number",
                        "description": "numeric value between 1 and 1024"
                    },
                    "python_type": {
                        "type": "float",
                        "description": ""
                    },
                    "component": "Slider",
                    "example_input": 1
                },
                {
                    "label": "temperature",
                    "parameter_name": "temp",
                    "parameter_has_default": true,
                    "parameter_default": 1,
                    "type": {
                        "type": "number",
                        "description": "numeric value between 0.1 and 1.2"
                    },
                    "python_type": {
                        "type": "float",
                        "description": ""
                    },
                    "component": "Slider",
                    "example_input": 0.1
                },
                {
                    "label": "top p",
                    "parameter_name": "top_p",
                    "parameter_has_default": true,
                    "parameter_default": 0.95,
                    "type": {
                        "type": "number",
                        "description": "numeric value between 0.1 and 1"
                    },
                    "python_type": {
                        "type": "float",
                        "description": ""
                    },
                    "component": "Slider",
                    "example_input": 0.1
                },
                {
                    "label": "top k",
                    "parameter_name": "top_k",
                    "parameter_has_default": true,
                    "parameter_default": 20,
                    "type": {
                        "type": "number",
                        "description": "numeric value between 1 and 128"
                    },
                    "python_type": {
                        "type": "float",
                        "description": ""
                    },
                    "component": "Slider",
                    "example_input": 1
                },
                {
                    "label": "allow midi cc event",
                    "parameter_name": "allow_cc",
                    "parameter_has_default": true,
                    "parameter_default": true,
                    "type": {
                        "type": "boolean"
                    },
                    "python_type": {
                        "type": "bool",
                        "description": ""
                    },
                    "component": "Checkbox",
                    "example_input": true
                }
            ],
            "returns": [
                {
                    "label": "seed",
                    "type": {
                        "type": "number",
                        "description": "numeric value between 0 and 2147483647"
                    },
                    "python_type": {
                        "type": "float",
                        "description": "numeric value between 0 and 2147483647"
                    },
                    "component": "Slider"
                },
                {
                    "label": "value_3",
                    "type": {
                        "type": "string"
                    },
                    "python_type": {
                        "type": "str",
                        "description": ""
                    },
                    "component": "Textbox"
                }
            ],
            "show_api": true
        },
        "/finish_run": {
            "parameters": [
                {
                    "label": "select model",
                    "parameter_name": "model_name",
                    "parameter_has_default": true,
                    "parameter_default": "generic pretrain model (tv2o-medium) by skytnt",
                    "type": {
                        "type": "string",
                        "enum": [
                            "generic pretrain model (tv2o-medium) by skytnt",
                            "generic pretrain model (tv2o-medium) by skytnt with jpop lora",
                            "generic pretrain model (tv2o-medium) by skytnt with touhou lora",
                            "generic pretrain model (tv2o-medium) by breadlicker45",
                            "generic pretrain model (tv2o-large) by asigalov61",
                            "generic pretrain model (tv2o-medium) by asigalov61",
                            "generic pretrain model (tv1-medium) by skytnt"
                        ]
                    },
                    "python_type": {
                        "type": "Literal['generic pretrain model (tv2o-medium) by skytnt', 'generic pretrain model (tv2o-medium) by skytnt with jpop lora', 'generic pretrain model (tv2o-medium) by skytnt with touhou lora', 'generic pretrain model (tv2o-medium) by breadlicker45', 'generic pretrain model (tv2o-large) by asigalov61', 'generic pretrain model (tv2o-medium) by asigalov61', 'generic pretrain model (tv1-medium) by skytnt']",
                        "description": ""
                    },
                    "component": "Dropdown",
                    "example_input": "generic pretrain model (tv2o-medium) by skytnt"
                },
                {
                    "component": "state",
                    "example": null,
                    "parameter_default": null,
                    "parameter_has_default": true,
                    "parameter_name": null,
                    "hidden": true
                }
            ],
            "returns": [
                {
                    "label": "output midi",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "File"
                },
                {
                    "label": "output midi",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "File"
                },
                {
                    "label": "output midi",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "File"
                },
                {
                    "label": "output midi",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "File"
                },
                {
                    "label": "output midi",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "File"
                },
                {
                    "label": "output midi",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "File"
                },
                {
                    "label": "output midi",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "File"
                },
                {
                    "label": "output midi",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "File"
                },
                {
                    "label": "value_3",
                    "type": {
                        "type": "string"
                    },
                    "python_type": {
                        "type": "str",
                        "description": ""
                    },
                    "component": "Textbox"
                }
            ],
            "show_api": true
        },
        "/render_audio": {
            "parameters": [
                {
                    "label": "select model",
                    "parameter_name": "model_name",
                    "parameter_has_default": true,
                    "parameter_default": "generic pretrain model (tv2o-medium) by skytnt",
                    "type": {
                        "type": "string",
                        "enum": [
                            "generic pretrain model (tv2o-medium) by skytnt",
                            "generic pretrain model (tv2o-medium) by skytnt with jpop lora",
                            "generic pretrain model (tv2o-medium) by skytnt with touhou lora",
                            "generic pretrain model (tv2o-medium) by breadlicker45",
                            "generic pretrain model (tv2o-large) by asigalov61",
                            "generic pretrain model (tv2o-medium) by asigalov61",
                            "generic pretrain model (tv1-medium) by skytnt"
                        ]
                    },
                    "python_type": {
                        "type": "Literal['generic pretrain model (tv2o-medium) by skytnt', 'generic pretrain model (tv2o-medium) by skytnt with jpop lora', 'generic pretrain model (tv2o-medium) by skytnt with touhou lora', 'generic pretrain model (tv2o-medium) by breadlicker45', 'generic pretrain model (tv2o-large) by asigalov61', 'generic pretrain model (tv2o-medium) by asigalov61', 'generic pretrain model (tv1-medium) by skytnt']",
                        "description": ""
                    },
                    "component": "Dropdown",
                    "example_input": "generic pretrain model (tv2o-medium) by skytnt"
                },
                {
                    "component": "state",
                    "example": null,
                    "parameter_default": null,
                    "parameter_has_default": true,
                    "parameter_name": null,
                    "hidden": true
                },
                {
                    "label": "render audio after generation",
                    "parameter_name": "should_render_audio",
                    "parameter_has_default": true,
                    "parameter_default": true,
                    "type": {
                        "type": "boolean"
                    },
                    "python_type": {
                        "type": "bool",
                        "description": ""
                    },
                    "component": "Checkbox",
                    "example_input": true
                }
            ],
            "returns": [
                {
                    "label": "output audio",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "Audio"
                },
                {
                    "label": "output audio",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "Audio"
                },
                {
                    "label": "output audio",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "Audio"
                },
                {
                    "label": "output audio",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "Audio"
                },
                {
                    "label": "output audio",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "Audio"
                },
                {
                    "label": "output audio",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "Audio"
                },
                {
                    "label": "output audio",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "Audio"
                },
                {
                    "label": "output audio",
                    "type": {
                        "properties": {
                            "path": {
                                "title": "Path",
                                "type": "string"
                            },
                            "url": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Url"
                            },
                            "size": {
                                "anyOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Size"
                            },
                            "orig_name": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Orig Name"
                            },
                            "mime_type": {
                                "anyOf": [
                                    {
                                        "type": "string"
                                    },
                                    {
                                        "type": "null"
                                    }
                                ],
                                "default": null,
                                "title": "Mime Type"
                            },
                            "is_stream": {
                                "default": false,
                                "title": "Is Stream",
                                "type": "boolean"
                            },
                            "meta": {
                                "default": {
                                    "_type": "gradio.FileData"
                                },
                                "title": "Meta",
                                "type": "object"
                            }
                        },
                        "required": [
                            "path"
                        ],
                        "title": "FileData",
                        "type": "object",
                        "additional_description": "The FileData class is a subclass of the GradioModel class that represents a file object within a Gradio interface. It is used to store file data and metadata when a file is uploaded.\n\nAttributes:\n    path: The server file path where the file is stored.\n    url: The normalized server URL pointing to the file.\n    size: The size of the file in bytes.\n    orig_name: The original filename before upload.\n    mime_type: The MIME type of the file.\n    is_stream: Indicates whether the file is a stream.\n    meta: Additional metadata used internally (should not be changed)."
                    },
                    "python_type": {
                        "type": "filepath",
                        "description": ""
                    },
                    "component": "Audio"
                }
            ],
            "show_api": true
        },
        "/undo_continuation": {
            "parameters": [
                {
                    "label": "select model",
                    "parameter_name": "model_name",
                    "parameter_has_default": true,
                    "parameter_default": "generic pretrain model (tv2o-medium) by skytnt",
                    "type": {
                        "type": "string",
                        "enum": [
                            "generic pretrain model (tv2o-medium) by skytnt",
                            "generic pretrain model (tv2o-medium) by skytnt with jpop lora",
                            "generic pretrain model (tv2o-medium) by skytnt with touhou lora",
                            "generic pretrain model (tv2o-medium) by breadlicker45",
                            "generic pretrain model (tv2o-large) by asigalov61",
                            "generic pretrain model (tv2o-medium) by asigalov61",
                            "generic pretrain model (tv1-medium) by skytnt"
                        ]
                    },
                    "python_type": {
                        "type": "Literal['generic pretrain model (tv2o-medium) by skytnt', 'generic pretrain model (tv2o-medium) by skytnt with jpop lora', 'generic pretrain model (tv2o-medium) by skytnt with touhou lora', 'generic pretrain model (tv2o-medium) by breadlicker45', 'generic pretrain model (tv2o-large) by asigalov61', 'generic pretrain model (tv2o-medium) by asigalov61', 'generic pretrain model (tv1-medium) by skytnt']",
                        "description": ""
                    },
                    "component": "Dropdown",
                    "example_input": "generic pretrain model (tv2o-medium) by skytnt"
                },
                {
                    "component": "state",
                    "example": null,
                    "parameter_default": null,
                    "parameter_has_default": true,
                    "parameter_name": null,
                    "hidden": true
                },
                {
                    "component": "state",
                    "example": null,
                    "parameter_default": null,
                    "parameter_has_default": true,
                    "parameter_name": null,
                    "hidden": true
                }
            ],
            "returns": [
                {
                    "label": "value_3",
                    "type": {
                        "type": "string"
                    },
                    "python_type": {
                        "type": "str",
                        "description": ""
                    },
                    "component": "Textbox"
                }
            ],
            "show_api": true
        }
    },
    "unnamed_endpoints": {}
}

```


