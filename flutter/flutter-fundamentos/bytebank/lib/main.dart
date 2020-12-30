import 'package:flutter/material.dart';

void main() => runApp(Column(
      children: [
        Text("Hello World 1!", textDirection: TextDirection.ltr),
        Text("Hello World 2!", textDirection: TextDirection.rtl),
      ],
      mainAxisAlignment: MainAxisAlignment.center,
    ));
