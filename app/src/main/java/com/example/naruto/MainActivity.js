<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <Spinner
        android:id="@+id/exerciseSpinner"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_marginBottom="16dp"
        android:entries="@array/exercises"
        android:minHeight="48dp"
        android:prompt="@string/select_exercise" />

    <EditText
        android:id="@+id/quantityEditText"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/exerciseSpinner"
        android:layout_marginBottom="45dp"
        android:autofillHints="quantity"
        android:hint="@string/enter_quantity_hint"
        android:inputType="number"
        tools:ignore="TouchTargetSizeCheck,VisualLintTextFieldSize" />


    <Button
        android:id="@+id/calculateButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/quantityEditText"
        android:layout_centerHorizontal="true"
        android:text="@string/calculate"/>

    <TextView
        android:id="@+id/resultTextView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/calculateButton"
        android:layout_centerHorizontal="true"
        android:layout_marginTop="16dp"/>

</RelativeLayout>
