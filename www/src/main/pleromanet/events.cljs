(ns pleromanet.events
  (:require [re-frame.core :as rf]
            [pleromanet.db :as db]))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
