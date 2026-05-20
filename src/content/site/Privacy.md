---
title: Privacy Policy
meta-title: Privacy Policy - Tagglo
meta-description: Read our Privacy Policy. Welcome to tagglo.co!
indexed: true
body: "
Last Updated: 2026-05-19

## Introduction

Tagglo GTM Companion is a browser extension that enhances the Google Tag Manager interface with search, filtering, workspace overview, and debugging helper features.

This Privacy Policy explains what data the extension accesses, stores, and sends when you use it.

## Data the Extension Accesses

The extension runs only on the following sites:

- https://tagmanager.google.com/*
- https://tagassistant.google.com/*

When you use Google Tag Manager, the extension reads information from the current Google Tag Manager page and related Google Tag Manager API responses. This may include:

- Google Tag Manager account, container, and workspace IDs from the page URL.
- Tag, trigger, variable, folder, template, issue, version, and workspace change data returned by Google Tag Manager.
- The currently selected tag or workspace route.
- Basic page state needed to show the extension side panel and tables.

This data is used to display enhanced search, filtering, overview, and side panel features inside the browser extension.

## Data Stored Locally

The extension stores data locally in your browser to provide its features and remember state between interactions. This includes:

- Extension metadata such as the extension ID and version.
- A randomly generated analytics client ID.
- A browser-session analytics session ID.
- Temporary per-tab Google Tag Manager state in IndexedDB, including selected account/container/workspace IDs, fetched tag/trigger/variable summaries, route state, and timestamps.
- Small UI state such as search terms on the Tag Assistant page and side panel state.

Per-tab Google Tag Manager snapshots are stored in the browser and are removed when the related browser tab is closed. The extension also limits stored tab snapshots to recent tabs.

## Analytics

The extension sends limited usage analytics to Google Analytics 4 using the Google Analytics Measurement Protocol.

Analytics events may include:

- Extension install or update events.
- Google Tag Manager route/page view events, represented by extension route names such as `tags`, `triggers`, `variables`, or `overview`.
- Tag Assistant debug page opened events.
- Browser and device metadata such as browser, browser version, operating system, operating system version, UI language, and desktop category.

The extension does not intentionally send the following to Google Analytics:

- Your name or email address.
- Google Tag Manager account, container, or workspace IDs.
- Tag, trigger, variable, folder, template, issue, version, or workspace change contents.
- Click-level behavior inside Google Tag Manager, except what is implied by route changes.

Google Analytics may process network information such as IP address as part of receiving analytics requests.

## Data Sharing

The extension sends requests to:

- Google Tag Manager and Tag Assistant, to read the Google Tag Manager data needed for extension features.
- Google Analytics, to report limited usage analytics described above.

The extension does not sell user data. The extension does not share Google Tag Manager contents with third parties other than Google services required for the extension behavior described in this policy.

## Remote Code

The extension does not load or execute remote code. Extension code is packaged with the extension.

## Data Retention

Locally stored extension data remains in your browser until it is replaced, cleared by the extension, cleared by the browser, or removed when you uninstall the extension.

Temporary per-tab Google Tag Manager snapshots are removed when tabs are closed and older snapshots may be evicted automatically.

Analytics data is retained according to the Google Analytics property settings used by Tagglo.

## User Control

You can stop the extension from accessing Google Tag Manager and Tag Assistant data by disabling or uninstalling the extension in your browser.

You can clear locally stored extension data through your browser's extension or site data controls.

## Contact

If you have questions about this Privacy Policy or the extension's data handling, contact:

info@tagglo.co
"

---
