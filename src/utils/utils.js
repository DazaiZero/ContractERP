import React, { Component, useContext, useState, useEffect } from "react";
import FlashMessage, {
  showMessage,
  hideMessage,
} from "react-native-flash-message";

export const ShowNotification = (message, type) => {
  if (type == 1) {
    showMessage({
      message: String(message),
      type: "success",
      backgroundColor: "green",
      color: "#FFFFFF",
    });
  }
  if (type == 2) {
    showMessage({
      message: String(message),
      type: "danger",
      backgroundColor: "red",
      color: "#FFFFFF",
    });
  }
};
