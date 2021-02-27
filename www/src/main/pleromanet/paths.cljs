(ns pleromanet.paths)

(defn path [name background-img inner-div]
  [:div
   [:div {:id "fool-background"
          :style {:background (str "url(../images/" background-img ")")
                  :background-repeat "repeat"
                  :background-size "cover"
                  :height "60vh" :width "300px"
                  :margin "40px"
                  :padding "50px"
                  :position "relative"}}

    [:div {:class "layer"
           :style {:background-color "rgba(0, 0, 0, 0.85)"
                   :position "absolute"
                   :top "0"
                   :left "0"
                   :width "100%"
                   :height "100%"
                   :border-style "outset"
                   :border-color "#9bb300"
                   :border-width "7px"
                   :border-radius "25px"}}
     [:h1 {:style {:margin "10px"}}
      "0"]
     [:h2 {:style {:margin "10px"}}
      name]]]
   inner-div])

(defn magus [] [:h2 "Magus"])
(defn fool []
  (path "fool" "fool.png"
        [:div ]))

(defn high-priestess [] [:h2 "High Priestess"])
(defn empress [] [:h2 "Empress"])
(defn chariot [] [:h2 "Chariot"])
(defn lovers [] [:h2 "Lovers"])
(defn star [] [:h2 "Star"])
(defn heirophant [] [:h2 "Heirophant"])
(defn hanged-man [] [:h2 "Hanged Man"])
(defn adjustment [] [:h2 "Adjustment"])
(defn lust [] [:h2 "Lust"])
(defn hermit [] [:h2 "Hermit"])
(defn wheel-of-fortune [] [:h2 "Wheel of Fortune"])
(defn devil [] [:h2 "Devil"])
(defn tower [] [:h2 "Tower"])
(defn art [] [:h2 "Art"])
(defn aeon [] [:h2 "Aeon"])
(defn sun [] [:h2 "Sun"])
(defn universe [] [:h2 "Universe"])
(defn moon [] [:h2 "Moon"])
(defn emperor [] [:h2 "Emperor"])

