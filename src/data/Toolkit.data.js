export const ToolkitData = [
    {
        "title" : "URL Encoder",
        "description" : "This encoding tool takes a string as input and returns a string in which all non-alphanumeric characters except '-_.' have been replaced with a percent (%) sign followed by two hex digits and spaces encoded as plus (+) signs. It is encoded the same way that the posted data from a WWW form is encoded, that is the same way as in application/x-www-form-urlencoded media type",
        "api" : "/api/urlencoder"
    },
    {
        "title" : "URL Decoder",
        "description" : "This decoding tool takes a URL Encoded string as input and will return the corresponding decoded string as result",
        "api" : "/api/urldecoder"
    },
    {
        "title" : "Base 64 Encoder",
        "description" : "Encodes the given string with base64. Base64-encoded data takes about 33% more space than the original data",
        "api" : "/api/base64encoder"
    },
    {
        "title" : "Base 64 Decoder",
        "description" : "Decodes the given base64 encoded string. The returned data may be binary.",
        "api" : "/api/base64decoder"
    },
    {
        "title" : "MD5 Hashing",
        "description" : "The MD5 message-digest algorithm is a cryptographically broken but still widely used hash function producing a 128-bit hash value.",
        "api" : "/api/md5"
    }
]