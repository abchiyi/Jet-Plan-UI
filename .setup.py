import os
import json

V = os.popen('git tag').read().split()
PATH = [
    # './packages/jet-plan-ui-theme/package.json',
    './package.json',
]

if V:
    VERSION = V[-1]
    for path in PATH:
        with open(path, 'r', encoding='UTF8') as f:
            config = json.load(f)

        with open(path, 'w', encoding='UTF8') as f:
            if VERSION:
                config['version'] = VERSION
                json.dump(config, f)

else:
    print('No Tag')