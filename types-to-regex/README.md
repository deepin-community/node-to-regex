# Installation
> `npm install --save @types/to-regex`

# Summary
This package contains type definitions for to-regex (https://github.com/jonschlinkert/to-regex).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/to-regex.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/to-regex/index.d.ts)
````ts
// Type definitions for to-regex 3.0
// Project: https://github.com/jonschlinkert/to-regex
// Definitions by: Rauli Laine <https://github.com/RauliL>
//                 Anatoly Pitikin <https://github.com/xapdkop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace toRegex {
    interface Options {
        /**
         * Generate a regex that will match any string that contains the given
         * pattern. By default, regex is strict will only return true for
         * exact matches.
         */
        contains?: boolean;

        /**
         * Create a regex that will match everything except the given pattern.
         */
        negate?: boolean;

        /**
         * Adds the i flag, to enable case-insensitive matching.
         */
        nocase?: boolean;

        /**
         * Define the flags you want to use on the generated regex.
         */
        flags?: string;

        /**
         * Generated regex is cached based on the provided string and options.
         * As a result, runtime compilation only happens once per pattern (as
         * long as options are also the same), which can result in dramatic
         * speed improvements.
         *
         * This also helps with debugging, since adding options and pattern
         * are added to the generated regex.
         * @default true
         */
        cache?: boolean;

        /**
         * Check the generated regular expression with safe-regex and throw an
         * error if the regex is potentially unsafe.
         */
        safe?: boolean;
    }

    /**
     * Create a regular expression from the given `pattern` string.
     */
    function makeRe(pattern: string | RegExp, options?: Options): RegExp;
}

/**
 * Create a regular expression from the given `patterns` string.
 */
declare function toRegex(patterns: string | ReadonlyArray<string> | RegExp, options?: toRegex.Options): RegExp;

export = toRegex;

````

### Additional Details
 * Last updated: Thu, 21 Oct 2021 23:32:00 GMT
 * Dependencies: none
 * Global values: none

# Credits
These definitions were written by [Rauli Laine](https://github.com/RauliL), and [Anatoly Pitikin](https://github.com/xapdkop).
