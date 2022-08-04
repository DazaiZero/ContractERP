export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "userPoolGroups": {
            "adminGroupRole": "string",
            "supervisorGroupRole": "string"
        },
        "gajuauthresource": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "gajucontracterp": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}