import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type ContactForm = {
    id : Nat;
    name : Text;
    email : Text;
    phone : ?Text;
    message : Text;
    hasResponse : Bool;
  };

  var nextContactId = 1;
  let submittedForms = Map.empty<Nat, ContactForm>();

  func validateSubmission(name : Text, email : Text, message : Text) {
    if (name.size() == 0 or email.size() == 0 or message.size() == 0) {
      Runtime.trap("Name, email, and message must not be empty");
    };
    if (not email.contains(#text "@")) {
      Runtime.trap("Email must contain @");
    };
    if (not email.contains(#text ".")) {
      Runtime.trap("Email must contain a dot");
    };
    if (message.size() < 5) {
      Runtime.trap("Message must have at least 5 characters");
    };
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : ?Text, message : Text) : async () {
    validateSubmission(name, email, message);
    let form : ContactForm = {
      id = nextContactId;
      name;
      email;
      phone;
      message;
      hasResponse = false;
    };
    submittedForms.add(nextContactId, form);
    nextContactId += 1;
  };

  public query ({ caller }) func getSubmittedForms() : async [ContactForm] {
    submittedForms.values().toArray();
  };
};
