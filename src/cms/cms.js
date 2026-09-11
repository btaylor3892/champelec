import CMS from "decap-cms-app";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ProjectPostPreview from "./preview-templates/ProjectPostPreview";
import ServicePagePreview from "./preview-templates/ServicePagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("services", ServicePagePreview);
CMS.registerPreviewTemplate("projects", ProjectPostPreview);
