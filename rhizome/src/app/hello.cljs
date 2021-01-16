(ns app.hello
  (:require [reagent.core :as r]
            [garden.core :refer [css]]))

(defn click-counter [click-count]
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(def click-count (r/atom 0))

(defn navbar [])

(defn header []
  [:div
   [:h1 "pleroma|net"]
   ;;[:p "main      0        1        2"]
   ])

(defn tree-of-life []
  [:div
   {:id "tree-of-life"}
  (comment
  [:table
   [:tbody
    [:tr [:td 0] [:td 1] [:td 2] [:td 3] [:td "O"] [:td 0] [:td 1] [:td 2] [:td 3]]
    [:tr [:td 1] [:td 2] [:td 4] [:td 7] [:td]]
    [:tr [:td 2] [:td 3] [:td 7] [:td 4] [:td]]
    [:tr [:td 3] [:td 4] [:td 1] [:td 5] [:td]]
    [:tr [:td] [:td] [:td] [:td] [:td]]]])]
)

(defn hello []

  [:<>

   [:div
    {:style
     {:font-family 'Courier
      :color '"#DEFF00"
      }}

    (header)
    (tree-of-life)
    (comment
      [:p "Hello, rhizome is running!"]
      [:p "Here's an example of using a component with state:"]
      [click-counter click-count])]])
