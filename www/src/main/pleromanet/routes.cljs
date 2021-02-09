(ns pleromanet.routes
  (:require [reagent.core :as r]
            [pleromanet.tol :as tol]
            [pleromanet.main :as main]
            [pleromanet.sephirot :as sephirot]
            [pleromanet.paths :as paths]
            ["react-router-dom" :refer (Route Link) :rename {BrowserRouter Router}]))

(defn about []
  [:h2 "About"])

(defn get-react-component [reagent-component]
  (r/reactify-component reagent-component))

(defn root []
  [:> Router
   [:div
    [main/header]
    [:nav [:ul
           [:li [:> Link {:to "/"} "Home"]]
           [:li [:> Link {:to "/about/"} "About"]]]]
    [:> Route {:path "/" :exact true :component (get-react-component tol/tol)}]
    [:> Route {:path "/about/" :component (get-react-component about)}]
    [:> Route {:path "/crown/" :component (get-react-component sephirot/crown)}]
    [:> Route {:path "/understanding/" :component (get-react-component sephirot/understanding)}]
    [:> Route {:path "/wisdom/" :component (get-react-component sephirot/wisdom)}]
    [:> Route {:path "/knowledge/" :component (get-react-component sephirot/knowledge)}]
    [:> Route {:path "/strength/" :component (get-react-component sephirot/strength)}]
    [:> Route {:path "/beauty/" :component (get-react-component sephirot/beauty)}]
    [:> Route {:path "/splendor/" :component (get-react-component sephirot/splendor)}]
    [:> Route {:path "/victory/" :component (get-react-component sephirot/victory)}]
    [:> Route {:path "/foundation/" :component (get-react-component sephirot/foundation)}]
    [:> Route {:path "/kingdom/" :component (get-react-component sephirot/kingdom)}]

    [:> Route {:path "/magus/" :component (get-react-component paths/magus)}]
    [:> Route {:path "/fool/" :component (get-react-component paths/fool)}]
    [:> Route {:path "/high-priestess/" :component (get-react-component paths/high-priestess)}]
    [:> Route {:path "/empress/" :component (get-react-component paths/empress)}]
    [:> Route {:path "/chariot/" :component (get-react-component paths/chariot)}]
    [:> Route {:path "/lovers/" :component (get-react-component paths/lovers)}]
    [:> Route {:path "/star/" :component (get-react-component paths/star)}]
    [:> Route {:path "/heirophant/" :component (get-react-component paths/heirophant)}]
    [:> Route {:path "/hanged-man/" :component (get-react-component paths/hanged-man)}]
    [:> Route {:path "/adjustment/" :component (get-react-component paths/adjustment)}]
    [:> Route {:path "/lust/" :component (get-react-component paths/lust)}]
    [:> Route {:path "/hermit/" :component (get-react-component paths/hermit)}]
    [:> Route {:path "/wheel-of-fortune/" :component (get-react-component paths/wheel-of-fortune)}]
    [:> Route {:path "/devil/" :component (get-react-component paths/devil)}]
    [:> Route {:path "/tower/" :component (get-react-component paths/tower)}]
    [:> Route {:path "/art/" :component (get-react-component paths/art)}]
    [:> Route {:path "/aeon/" :component (get-react-component paths/aeon)}]
    [:> Route {:path "/sun/" :component (get-react-component paths/sun)}]
    [:> Route {:path "/universe/" :component (get-react-component paths/universe)}]
    [:> Route {:path "/moon/" :component (get-react-component paths/moon)}]
    [:> Route {:path "/emperor/" :component (get-react-component paths/emperor)}]]])
