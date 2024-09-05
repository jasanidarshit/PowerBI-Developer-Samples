// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-inferrable-types */

// Scope Base of AAD app. Use the below configuration to use all the permissions provided in the AAD app through Azure portal.
// Refer https://aka.ms/PowerBIPermissions for complete list of Power BI scopes

// URL used for initiating authorization request
export const authorityUrl: string = "https://login.microsoftonline.com/db0fc84b-8300-4d5a-9d18-00141c8513e2";

// End point URL for Power BI API
export const powerBiApiUrl: string = "https://api.powerbi.com/"; //"https://login.microsoftonline.com/db0fc84b-8300-4d5a-9d18-00141c8513e2/oauth2/v2.0/token" 

// Scope for securing access token
export const scopeBase: string[] = ["https://analysis.windows.net/powerbi/api/Report.Read.All"];

// Client Id (Application Id) of the AAD app.
export const clientId: string = "33ccc942-2e31-456a-a90e-8d35072a0729";

// Id of the workspace where the report is hosted
export const workspaceId: string = "bb19ad13-be4b-4829-95ad-420ac5a32f50";

// Id of the report to be embedded
export const reportId: string = "37caa302-de99-4763-b628-0568e99b6aa5";