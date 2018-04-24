import React from "react";
import CMS from "netlify-cms";
import "netlify-cms/dist/cms.css";
import netlifyIdentity from 'netlify-identity-widget'
import { CustomPathImageControl, CustomPathImagePreview } from "./customPathImage.js";

netlifyIdentity.init();

CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);
