import React from "react";
import { useState } from "react";
import "./MainHeader.css";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Menu,
  X,
  GraduationCap,
  LogOut,
  User,
} from "lucide-react";
import MainContainer from "./MainContainer";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";

export default function MainHeader() {
  const { totalItems } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const { user, isLoggedIn, logout } = useAuth();
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
  ];
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 bg-white/95 z-50 border-b border-black/10">
      <MainContainer>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-display font-semibold   transition-colors"
          >
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="font-secondary hover:text-primary">LearnFlow</span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium link-underline ${
                  isActive(link.path)
                    ? "text-primary headlink"
                    : "disabled-link headlink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart" className="relative">
              <button
                variant="ghost"
                size="icon"
                className="relative hover:bg-muted/10 p-3 rounded-lg cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5 " />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-xs text-white rounded-full flex items-center justify-center ">
                    {totalItems}
                  </span>
                )}
              </button>
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {user.email?.split("@")[0]}
                </span>
                <button
                  className="flex items-center gap-x-2 text-black/70 px-3 rounded-xl py-1 border border-muted/20 transition hover:bg-muted/5 hover:border-primary/50"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primary text-white px-3 py-1 rounded-xl">
                  Login
                </button>
              </Link>
            )}
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border ">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={` font-medium py-2 ${
                    isActive(link.path) ? "text-primary" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-base font-medium py-2 text-muted"
              >
                <ShoppingCart className="w-5 h-5" />
                Cart {totalItems > 0 && `(${totalItems})`}
              </Link>
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full">Login</button>
                </Link>
              )}
            </div>
          </div>
        )}
      </MainContainer>
    </nav>
  );
}
