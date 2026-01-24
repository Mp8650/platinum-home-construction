"use client";

import { useEffect } from "react";
import { getSeoData } from "../../utils/seoUtil";

const SeoHelper = () => {
  useEffect(() => {
    const loadSeo = async () => {
      const seoData = await getSeoData();
      if (!seoData) return;

      const path =
        window.location.pathname
          .split("/")
          .filter(Boolean)
          .pop()
          ?.toLowerCase() || "home";

      const pageSeo = seoData[path] || seoData.home;

      // Title
      if (pageSeo.title) {
        document.title = pageSeo.title;
      }

      // Meta description
      if (pageSeo.meta_description) {
        let desc = document.querySelector("meta[name='description']");
        if (!desc) {
          desc = document.createElement("meta");
          desc.setAttribute("name", "description");
          document.head.appendChild(desc);
        }
        desc.setAttribute("content", pageSeo.meta_description);
      }

      // Meta keywords
      if (pageSeo.keywords?.length) {
        let keywords = document.querySelector("meta[name='keywords']");
        if (!keywords) {
          keywords = document.createElement("meta");
          keywords.setAttribute("name", "keywords");
          document.head.appendChild(keywords);
        }
        keywords.setAttribute("content", pageSeo.keywords.join(", "));
      }

      // Canonical
      if (pageSeo.canonical) {
        let canonical = document.querySelector("link[rel='canonical']");
        if (!canonical) {
          canonical = document.createElement("link");
          canonical.setAttribute("rel", "canonical");
          document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", pageSeo.canonical);
      }

      // Open Graph
      if (pageSeo.og) {
        Object.entries({
          "og:title": pageSeo.og.title,
          "og:description": pageSeo.og.description,
          "og:url": pageSeo.og.url,
          "og:type": pageSeo.og.type
        }).forEach(([property, content]) => {
          if (!content) return;

          let tag = document.querySelector(`meta[property='${property}']`);
          if (!tag) {
            tag = document.createElement("meta");
            tag.setAttribute("property", property);
            document.head.appendChild(tag);
          }
          tag.setAttribute("content", content);
        });
      }
    };

    loadSeo();
  }, []);

  return null;
};

export default SeoHelper;
