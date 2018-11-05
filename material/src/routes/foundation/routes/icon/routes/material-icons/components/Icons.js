import React from 'react';
import QueueAnim from 'rc-queue-anim';
import MaterialIcon from 'components/MaterialIcon';
import Button from '@material-ui/core/Button';
import styles from './styles.module.scss';

const Icons = () => (
  <p>
    <MaterialIcon icon="slow_motion_video" />
    <MaterialIcon icon="playlist_add" />
    <MaterialIcon icon="play_circle_outline" />
    <MaterialIcon icon="play_circle_filled" />
    <MaterialIcon icon="play_arrow" />
    <MaterialIcon icon="pause_circle_outline" />
    <MaterialIcon icon="pause_circle_filled" />
    <MaterialIcon icon="pause" />
    <MaterialIcon icon="note" />
    <MaterialIcon icon="not_interested" />
    <MaterialIcon icon="repeat" />
    <MaterialIcon icon="remove_from_queue" />
    <MaterialIcon icon="recent_actors" />
    <MaterialIcon icon="radio" />
    <MaterialIcon icon="queue_play_next" />
    <MaterialIcon icon="queue_music" />
    <MaterialIcon icon="queue" />
    <MaterialIcon icon="playlist_play" />
    <MaterialIcon icon="playlist_add_check" />
    <MaterialIcon icon="assignment_ind" />
    <MaterialIcon icon="assignment_late" />
    <MaterialIcon icon="assignment_return" />
    <MaterialIcon icon="assignment_returned" />
    <MaterialIcon icon="assignment_turned_in" />
    <MaterialIcon icon="autorenew" />
    <MaterialIcon icon="backup" />
    <MaterialIcon icon="book" />
    <MaterialIcon icon="bookmark" />
    <MaterialIcon icon="video_library" />
    <MaterialIcon icon="video_label" />
    <MaterialIcon icon="video_call" />
    <MaterialIcon icon="surround_sound" />
    <MaterialIcon icon="subtitles" />
    <MaterialIcon icon="subscriptions" />
    <MaterialIcon icon="stop" />
    <MaterialIcon icon="sort_by_alpha" />
    <MaterialIcon icon="snooze" />
    <MaterialIcon icon="check_circle" />
    <MaterialIcon icon="web_asset" />
    <MaterialIcon icon="web" />
    <MaterialIcon icon="volume_up" />
    <MaterialIcon icon="volume_off" />
    <MaterialIcon icon="volume_mute" />
    <MaterialIcon icon="volume_down" />
    <MaterialIcon icon="videocam_off" />
    <MaterialIcon icon="videocam" />
    <MaterialIcon icon="delete" />
    <MaterialIcon icon="delete_forever" />
    <MaterialIcon icon="description" />
    <MaterialIcon icon="dns" />
    <MaterialIcon icon="done" />
    <MaterialIcon icon="done_all" />
    <MaterialIcon icon="donut_large" />
    <MaterialIcon icon="donut_small" />
    <MaterialIcon icon="eject" />
    <MaterialIcon icon="dialer_sip" />
    <MaterialIcon icon="contacts" />
    <MaterialIcon icon="contact_phone" />
    <MaterialIcon icon="contact_mail" />
    <MaterialIcon icon="comment" />
    <MaterialIcon icon="clear_all" />
    <MaterialIcon icon="chat_bubble_outline" />
    <MaterialIcon icon="chat_bubble" />
    <MaterialIcon icon="chat" />
    <MaterialIcon icon="call_split" />
    <MaterialIcon icon="call_received" />
    <MaterialIcon icon="call_missed_outgoing" />
    <MaterialIcon icon="call_missed" />
    <MaterialIcon icon="call_merge" />
    <MaterialIcon icon="call_made" />
    <MaterialIcon icon="call_end" />
    <MaterialIcon icon="call" />
    <MaterialIcon icon="business" />
    <MaterialIcon icon="location_on" />
    <MaterialIcon icon="location_off" />
    <MaterialIcon icon="live_help" />
    <MaterialIcon icon="invert_colors_off" />
    <MaterialIcon icon="import_export" />
    <MaterialIcon icon="import_contacts" />
    <MaterialIcon icon="forum" />
    <MaterialIcon icon="email" />
    <MaterialIcon icon="dialpad" />
    <MaterialIcon icon="portable_wifi_off" />
    <MaterialIcon icon="phonelink_setup" />
    <MaterialIcon icon="phonelink_ring" />
    <MaterialIcon icon="phonelink_lock" />
    <MaterialIcon icon="phonelink_erase" />
    <MaterialIcon icon="phone" />
    <MaterialIcon icon="no_sim" />
    <MaterialIcon icon="message" />
    <MaterialIcon icon="mail_outline" />
    <MaterialIcon icon="stay_primary_portrait" />
    <MaterialIcon icon="stay_primary_landscape" />
    <MaterialIcon icon="stay_current_portrait" />
    <MaterialIcon icon="stay_current_landscape" />
    <MaterialIcon icon="speaker_phone" />
    <MaterialIcon icon="screen_share" />
    <MaterialIcon icon="rss_feed" />
    <MaterialIcon icon="ring_volume" />
    <MaterialIcon icon="present_to_all" />
    <MaterialIcon icon="lock" />
    <MaterialIcon icon="lock_open" />
    <MaterialIcon icon="lock_outline" />
    <MaterialIcon icon="loyalty" />
    <MaterialIcon icon="vpn_key" />
    <MaterialIcon icon="voicemail" />
    <MaterialIcon icon="textsms" />
    <MaterialIcon icon="swap_calls" />
    <MaterialIcon icon="stop_screen_share" />
    <MaterialIcon icon="open_in_browser" />
    <MaterialIcon icon="open_in_new" />
    <MaterialIcon icon="open_with" />
    <MaterialIcon icon="pageview" />
    <MaterialIcon icon="pan_tool" />
    <MaterialIcon icon="payment" />
    <MaterialIcon icon="perm_camera_mic" />
    <MaterialIcon icon="perm_contact_calendar" />
    <MaterialIcon icon="perm_data_setting" />
    <MaterialIcon icon="content_copy" />
    <MaterialIcon icon="clear" />
    <MaterialIcon icon="block" />
    <MaterialIcon icon="backspace" />
    <MaterialIcon icon="archive" />
    <MaterialIcon icon="add_circle_outline" />
    <MaterialIcon icon="add_circle" />
    <MaterialIcon icon="add_box" />
    <MaterialIcon icon="add" />
    <MaterialIcon icon="polymer" />
    <MaterialIcon icon="power_settings_new" />
    <MaterialIcon icon="pregnant_woman" />
    <MaterialIcon icon="print" />
    <MaterialIcon icon="query_builder" />
    <MaterialIcon icon="question_answer" />
    <MaterialIcon icon="receipt" />
    <MaterialIcon icon="record_voice_over" />
    <MaterialIcon icon="redeem" />
    <MaterialIcon icon="schedule" />
    <MaterialIcon icon="rowing" />
    <MaterialIcon icon="rounded_corner" />
    <MaterialIcon icon="room" />
    <MaterialIcon icon="restore_page" />
    <MaterialIcon icon="restore" />
    <MaterialIcon icon="report_problem" />
    <MaterialIcon icon="reorder" />
    <MaterialIcon icon="remove_shopping_cart" />
    <MaterialIcon icon="search" />
    <MaterialIcon icon="settings" />
    <MaterialIcon icon="settings_applications" />
    <MaterialIcon icon="settings_backup_restore" />
    <MaterialIcon icon="settings_bluetooth" />
    <MaterialIcon icon="settings_brightness" />
    <MaterialIcon icon="settings_cell" />
    <MaterialIcon icon="settings_ethernet" />
    <MaterialIcon icon="settings_input_antenna" />
    <MaterialIcon icon="settings_input_component" />
    <MaterialIcon icon="settings_input_composite" />
    <MaterialIcon icon="settings_input_hdmi" />
    <MaterialIcon icon="settings_input_svideo" />
    <MaterialIcon icon="settings_overscan" />
    <MaterialIcon icon="settings_phone" />
    <MaterialIcon icon="settings_power" />
    <MaterialIcon icon="settings_remote" />
    <MaterialIcon icon="settings_voice" />
    <MaterialIcon icon="shop" />
    <MaterialIcon icon="shop_two" />
    <MaterialIcon icon="shopping_basket" />
    <MaterialIcon icon="shopping_cart" />
    <MaterialIcon icon="speaker_notes" />
    <MaterialIcon icon="speaker_notes_off" />
    <MaterialIcon icon="spellcheck" />
    <MaterialIcon icon="stars" />
    <MaterialIcon icon="store" />
    <MaterialIcon icon="subject" />
    <MaterialIcon icon="supervisor_account" />
    <MaterialIcon icon="swap_horiz" />
    <MaterialIcon icon="swap_vert" />
    <MaterialIcon icon="swap_vertical_circle" />
    <MaterialIcon icon="system_update_alt" />
    <MaterialIcon icon="tab" />
    <MaterialIcon icon="tab_unselected" />
    <MaterialIcon icon="theaters" />
    <MaterialIcon icon="thumb_down" />
    <MaterialIcon icon="thumb_up" />
    <MaterialIcon icon="thumbs_up_down" />
    <MaterialIcon icon="timeline" />
    <MaterialIcon icon="toc" />
    <MaterialIcon icon="today" />
    <MaterialIcon icon="toll" />
    <MaterialIcon icon="touch_app" />
    <MaterialIcon icon="track_changes" />
    <MaterialIcon icon="translate" />
    <MaterialIcon icon="trending_down" />
    <MaterialIcon icon="trending_flat" />
    <MaterialIcon icon="trending_up" />
    <MaterialIcon icon="turned_in" />
    <MaterialIcon icon="turned_in_not" />
    <MaterialIcon icon="update" />
    <MaterialIcon icon="verified_user" />
    <MaterialIcon icon="view_agenda" />
    <MaterialIcon icon="view_array" />
    <MaterialIcon icon="view_carousel" />
    <MaterialIcon icon="view_column" />
    <MaterialIcon icon="view_day" />
    <MaterialIcon icon="view_headline" />
    <MaterialIcon icon="view_list" />
    <MaterialIcon icon="view_module" />
    <MaterialIcon icon="view_quilt" />
    <MaterialIcon icon="view_stream" />
    <MaterialIcon icon="view_week" />
    <MaterialIcon icon="visibility" />
    <MaterialIcon icon="visibility_off" />
    <MaterialIcon icon="watch_later" />
    <MaterialIcon icon="work" />
    <MaterialIcon icon="youtube_searched_for" />
    <MaterialIcon icon="zoom_in" />
    <MaterialIcon icon="zoom_out" />
    <MaterialIcon icon="add_alert" />
    <MaterialIcon icon="error" />
    <MaterialIcon icon="error_outline" />
    <MaterialIcon icon="warning" />
    <MaterialIcon icon="add_to_queue" />
    <MaterialIcon icon="airplay" />
    <MaterialIcon icon="album" />
    <MaterialIcon icon="art_track" />
    <MaterialIcon icon="av_timer" />
    <MaterialIcon icon="branding_watermark" />
    <MaterialIcon icon="call_to_action" />
    <MaterialIcon icon="closed_caption" />
    <MaterialIcon icon="equalizer" />
    <MaterialIcon icon="explicit" />
    <MaterialIcon icon="fast_forward" />
    <MaterialIcon icon="fast_rewind" />
    <MaterialIcon icon="featured_play_list" />
    <MaterialIcon icon="featured_video" />
    <MaterialIcon icon="fiber_dvr" />
    <MaterialIcon icon="fiber_manual_record" />
    <MaterialIcon icon="fiber_new" />
    <MaterialIcon icon="fiber_pin" />
    <MaterialIcon icon="fiber_smart_record" />
    <MaterialIcon icon="forward_10" />
    <MaterialIcon icon="forward_30" />
    <MaterialIcon icon="forward_5" />
    <MaterialIcon icon="games" />
    <MaterialIcon icon="hd" />
    <MaterialIcon icon="hearing" />
    <MaterialIcon icon="high_quality" />
    <MaterialIcon icon="library_add" />
    <MaterialIcon icon="library_books" />
    <MaterialIcon icon="library_music" />
    <MaterialIcon icon="loop" />
    <MaterialIcon icon="mic" />
    <MaterialIcon icon="mic_none" />
    <MaterialIcon icon="mic_off" />
    <MaterialIcon icon="movie" />
    <MaterialIcon icon="music_video" />
    <MaterialIcon icon="new_releases" />
    <MaterialIcon icon="repeat_one" />
    <MaterialIcon icon="replay" />
    <MaterialIcon icon="replay_5" />
    <MaterialIcon icon="shuffle" />
    <MaterialIcon icon="skip_next" />
    <MaterialIcon icon="skip_previous" />
    <MaterialIcon icon="schedule" />
    <MaterialIcon icon="tab_unselected" />
    <MaterialIcon icon="tab" />
    <MaterialIcon icon="system_update_alt" />
    <MaterialIcon icon="swap_vertical_circle" />
    <MaterialIcon icon="verified_user" />
    <MaterialIcon icon="update" />
    <MaterialIcon icon="turned_in_not" />
    <MaterialIcon icon="turned_in" />
    <MaterialIcon icon="alarm" />
    <MaterialIcon icon="add_shopping_cart" />
    <MaterialIcon icon="account_circle" />
    <MaterialIcon icon="account_box" />
    <MaterialIcon icon="account_balance_wallet" />
    <MaterialIcon icon="account_balance" />
    <MaterialIcon icon="accessible" />
    <MaterialIcon icon="accessibility" />
    <MaterialIcon icon="3d_rotation" />
    <MaterialIcon icon="call_to_action" />
    <MaterialIcon icon="branding_watermark" />
    <MaterialIcon icon="av_timer" />
    <MaterialIcon icon="art_track" />
    <MaterialIcon icon="album" />
    <MaterialIcon icon="airplay" />
    <MaterialIcon icon="add_to_queue" />
    <MaterialIcon icon="explicit" />
    <MaterialIcon icon="fast_forward" />
    <MaterialIcon icon="assignment_ind" />
    <MaterialIcon icon="assignment_late" />
    <MaterialIcon icon="assignment_return" />
    <MaterialIcon icon="assignment_returned" />
    <MaterialIcon icon="assignment_turned_in" />
    <MaterialIcon icon="autorenew" />
    <MaterialIcon icon="backup" />
    <MaterialIcon icon="book" />
    <MaterialIcon icon="bookmark" />
    <MaterialIcon icon="euro_symbol" />
    <MaterialIcon icon="event" />
    <MaterialIcon icon="event_seat" />
    <MaterialIcon icon="exit_to_app" />
    <MaterialIcon icon="explore" />
    <MaterialIcon icon="extension" />
    <MaterialIcon icon="face" />
    <MaterialIcon icon="favorite" />
    <MaterialIcon icon="favorite_border" />
    <MaterialIcon icon="bookmark_border" />
    <MaterialIcon icon="bug_report" />
    <MaterialIcon icon="build" />
    <MaterialIcon icon="cached" />
    <MaterialIcon icon="camera_enhance" />
    <MaterialIcon icon="card_giftcard" />
    <MaterialIcon icon="card_membership" />
    <MaterialIcon icon="card_travel" />
    <MaterialIcon icon="change_history" />
    <MaterialIcon icon="delete" />
    <MaterialIcon icon="delete_forever" />
    <MaterialIcon icon="description" />
    <MaterialIcon icon="dns" />
    <MaterialIcon icon="done" />
    <MaterialIcon icon="done_all" />
    <MaterialIcon icon="donut_large" />
    <MaterialIcon icon="donut_small" />
    <MaterialIcon icon="eject" />
    <MaterialIcon icon="g_translate" />
    <MaterialIcon icon="feedback" />
    <MaterialIcon icon="find_in_page" />
    <MaterialIcon icon="find_replace" />
    <MaterialIcon icon="fingerprint" />
    <MaterialIcon icon="flight_land" />
    <MaterialIcon icon="flight_takeoff" />
    <MaterialIcon icon="flip_to_back" />
    <MaterialIcon icon="flip_to_front" />
    <MaterialIcon icon="gavel" />
    <MaterialIcon icon="get_app" />
    <MaterialIcon icon="gif" />
    <MaterialIcon icon="grade" />
    <MaterialIcon icon="group_work" />
    <MaterialIcon icon="help" />
    <MaterialIcon icon="help_outline" />
    <MaterialIcon icon="highlight_off" />
    <MaterialIcon icon="history" />
    <MaterialIcon icon="redeem" />
    <MaterialIcon icon="record_voice_over" />
    <MaterialIcon icon="receipt" />
    <MaterialIcon icon="equalizer" />
    <MaterialIcon icon="closed_caption" />
    <MaterialIcon icon="fiber_pin" />
    <MaterialIcon icon="fiber_new" />
    <MaterialIcon icon="fiber_manual_record" />
    <MaterialIcon icon="fiber_dvr" />
    <MaterialIcon icon="open_in_browser" />
    <MaterialIcon icon="open_in_new" />
    <MaterialIcon icon="open_with" />
    <MaterialIcon icon="pageview" />
    <MaterialIcon icon="pan_tool" />
    <MaterialIcon icon="payment" />
    <MaterialIcon icon="perm_camera_mic" />
    <MaterialIcon icon="perm_contact_calendar" />
    <MaterialIcon icon="perm_data_setting" />
    <MaterialIcon icon="list" />
    <MaterialIcon icon="line_weight" />
    <MaterialIcon icon="line_style" />
    <MaterialIcon icon="lightbulb_outline" />
    <MaterialIcon icon="launch" />
    <MaterialIcon icon="language" />
    <MaterialIcon icon="label_outline" />
    <MaterialIcon icon="label" />
    <MaterialIcon icon="invert_colors" />
    <MaterialIcon icon="input" />
    <MaterialIcon icon="info_outline" />
    <MaterialIcon icon="info" />
    <MaterialIcon icon="important_devices" />
    <MaterialIcon icon="https" />
    <MaterialIcon icon="http" />
    <MaterialIcon icon="hourglass_full" />
    <MaterialIcon icon="hourglass_empty" />
    <MaterialIcon icon="home" />
    <MaterialIcon icon="perm_device_information" />
    <MaterialIcon icon="perm_identity" />
    <MaterialIcon icon="perm_media" />
    <MaterialIcon icon="perm_phone_msg" />
    <MaterialIcon icon="perm_scan_wifi" />
    <MaterialIcon icon="pets" />
    <MaterialIcon icon="picture_in_picture" />
    <MaterialIcon icon="picture_in_picture_alt" />
    <MaterialIcon icon="play_for_work" />
    <MaterialIcon icon="lock" />
    <MaterialIcon icon="lock_open" />
    <MaterialIcon icon="lock_outline" />
    <MaterialIcon icon="loyalty" />
    <MaterialIcon icon="markunread_mailbox" />
    <MaterialIcon icon="motorcycle" />
    <MaterialIcon icon="note_add" />
    <MaterialIcon icon="offline_pin" />
    <MaterialIcon icon="opacity" />
    <MaterialIcon icon="query_builder" />
    <MaterialIcon icon="print" />
    <MaterialIcon icon="pregnant_woman" />
    <MaterialIcon icon="power_settings_new" />
    <MaterialIcon icon="polymer" />
    <MaterialIcon icon="add_alert" />
    <MaterialIcon icon="question_answer" />
    <MaterialIcon icon="remove_shopping_cart" />
    <MaterialIcon icon="reorder" />
    <MaterialIcon icon="report_problem" />
    <MaterialIcon icon="restore" />
    <MaterialIcon icon="restore_page" />
    <MaterialIcon icon="room" />
    <MaterialIcon icon="rounded_corner" />
    <MaterialIcon icon="rowing" />
    <MaterialIcon icon="fast_rewind" />
    <MaterialIcon icon="featured_play_list" />
    <MaterialIcon icon="featured_video" />
    <MaterialIcon icon="settings_voice" />
    <MaterialIcon icon="settings_remote" />
    <MaterialIcon icon="settings_power" />
    <MaterialIcon icon="settings_phone" />
    <MaterialIcon icon="settings_overscan" />
    <MaterialIcon icon="settings_input_svideo" />
    <MaterialIcon icon="settings_input_hdmi" />
    <MaterialIcon icon="settings_input_composite" />
    <MaterialIcon icon="settings_input_component" />
    <MaterialIcon icon="stars" />
    <MaterialIcon icon="spellcheck" />
    <MaterialIcon icon="speaker_notes_off" />
    <MaterialIcon icon="speaker_notes" />
    <MaterialIcon icon="shopping_cart" />
    <MaterialIcon icon="shopping_basket" />
    <MaterialIcon icon="shop_two" />
    <MaterialIcon icon="shop" />
    <MaterialIcon icon="settings_input_antenna" />
    <MaterialIcon icon="settings_ethernet" />
    <MaterialIcon icon="settings_cell" />
    <MaterialIcon icon="settings_brightness" />
    <MaterialIcon icon="settings_bluetooth" />
    <MaterialIcon icon="settings_backup_restore" />
    <MaterialIcon icon="settings_applications" />
    <MaterialIcon icon="settings" />
    <MaterialIcon icon="search" />
    <MaterialIcon icon="view_agenda" />
    <MaterialIcon icon="trending_up" />
    <MaterialIcon icon="trending_flat" />
    <MaterialIcon icon="trending_down" />
    <MaterialIcon icon="translate" />
    <MaterialIcon icon="track_changes" />
    <MaterialIcon icon="warning" />
    <MaterialIcon icon="error_outline" />
    <MaterialIcon icon="error" />
    <MaterialIcon icon="touch_app" />
    <MaterialIcon icon="toll" />
    <MaterialIcon icon="today" />
    <MaterialIcon icon="toc" />
    <MaterialIcon icon="timeline" />
    <MaterialIcon icon="thumbs_up_down" />
    <MaterialIcon icon="thumb_up" />
    <MaterialIcon icon="thumb_down" />
    <MaterialIcon icon="theaters" />
    <MaterialIcon icon="swap_vert" />
    <MaterialIcon icon="swap_horiz" />
    <MaterialIcon icon="supervisor_account" />
    <MaterialIcon icon="subject" />
    <MaterialIcon icon="store" />
    <MaterialIcon icon="view_day" />
    <MaterialIcon icon="view_column" />
    <MaterialIcon icon="view_carousel" />
    <MaterialIcon icon="view_array" />
    <MaterialIcon icon="zoom_out" />
    <MaterialIcon icon="zoom_in" />
    <MaterialIcon icon="youtube_searched_for" />
    <MaterialIcon icon="work" />
    <MaterialIcon icon="watch_later" />
    <MaterialIcon icon="visibility_off" />
    <MaterialIcon icon="visibility" />
    <MaterialIcon icon="view_week" />
    <MaterialIcon icon="view_stream" />
    <MaterialIcon icon="view_headline" />
    <MaterialIcon icon="view_list" />
    <MaterialIcon icon="view_module" />
    <MaterialIcon icon="view_quilt" />
    <MaterialIcon icon="assignment" />
    <MaterialIcon icon="assessment" />
    <MaterialIcon icon="aspect_ratio" />
    <MaterialIcon icon="announcement" />
    <MaterialIcon icon="android" />
    <MaterialIcon icon="all_out" />
    <MaterialIcon icon="alarm_on" />
    <MaterialIcon icon="alarm_off" />
    <MaterialIcon icon="alarm_add" />
    <MaterialIcon icon="check_circle" />
    <MaterialIcon icon="chrome_reader_mode" />
    <MaterialIcon icon="class" />
    <MaterialIcon icon="code" />
    <MaterialIcon icon="compare_arrows" />
    <MaterialIcon icon="copyright" />
    <MaterialIcon icon="credit_card" />
    <MaterialIcon icon="dashboard" />
    <MaterialIcon icon="date_range" />
    <MaterialIcon icon="format_textdirection_l_to_r" />
    <MaterialIcon icon="format_textdirection_r_to_l" />
    <MaterialIcon icon="format_underlined" />
    <MaterialIcon icon="functions" />
    <MaterialIcon icon="highlight" />
    <MaterialIcon icon="insert_chart" />
    <MaterialIcon icon="insert_comment" />
    <MaterialIcon icon="insert_drive_file" />
    <MaterialIcon icon="insert_emoticon" />
    <MaterialIcon icon="multiline_chart" />
    <MaterialIcon icon="pie_chart" />
    <MaterialIcon icon="pie_chart_outlined" />
    <MaterialIcon icon="publish" />
    <MaterialIcon icon="short_text" />
    <MaterialIcon icon="show_chart" />
    <MaterialIcon icon="space_bar" />
    <MaterialIcon icon="strikethrough_s" />
    <MaterialIcon icon="text_fields" />
    <MaterialIcon icon="assignment_ind" />
    <MaterialIcon icon="assignment_late" />
    <MaterialIcon icon="assignment_return" />
    <MaterialIcon icon="assignment_returned" />
    <MaterialIcon icon="assignment_turned_in" />
    <MaterialIcon icon="autorenew" />
    <MaterialIcon icon="backup" />
    <MaterialIcon icon="book" />
    <MaterialIcon icon="bookmark" />
    <MaterialIcon icon="bookmark_border" />
    <MaterialIcon icon="attachment" />
    <MaterialIcon icon="cloud" />
    <MaterialIcon icon="cloud_circle" />
    <MaterialIcon icon="cloud_done" />
    <MaterialIcon icon="cloud_download" />
    <MaterialIcon icon="cloud_off" />
    <MaterialIcon icon="cloud_queue" />
    <MaterialIcon icon="cloud_upload" />
    <MaterialIcon icon="create_new_folder" />
    <MaterialIcon icon="video_label" />
    <MaterialIcon icon="video_call" />
    <MaterialIcon icon="surround_sound" />
    <MaterialIcon icon="subtitles" />
    <MaterialIcon icon="subscriptions" />
    <MaterialIcon icon="stop" />
    <MaterialIcon icon="sort_by_alpha" />
    <MaterialIcon icon="snooze" />
    <MaterialIcon icon="keyboard_backspace" />
    <MaterialIcon icon="keyboard_arrow_up" />
    <MaterialIcon icon="keyboard_arrow_right" />
    <MaterialIcon icon="keyboard_arrow_left" />
    <MaterialIcon icon="keyboard_arrow_down" />
    <MaterialIcon icon="keyboard" />
    <MaterialIcon icon="headset_mic" />
    <MaterialIcon icon="headset" />
    <MaterialIcon icon="gamepad" />
    <MaterialIcon icon="keyboard" />
    <MaterialIcon icon="headset_mic" />
    <MaterialIcon icon="headset" />
    <MaterialIcon icon="gamepad" />
    <MaterialIcon icon="comment" />
    <MaterialIcon icon="clear_all" />
    <MaterialIcon icon="chat_bubble_outline" />
    <MaterialIcon icon="chat_bubble" />
    <MaterialIcon icon="chat" />
    <MaterialIcon icon="file_download" />
    <MaterialIcon icon="file_upload" />
    <MaterialIcon icon="folder" />
    <MaterialIcon icon="folder_open" />
    <MaterialIcon icon="folder_shared" />
    <MaterialIcon icon="call_made" />
    <MaterialIcon icon="call_end" />
    <MaterialIcon icon="call" />
    <MaterialIcon icon="business" />
    <MaterialIcon icon="cast" />
    <MaterialIcon icon="cast_connected" />
    <MaterialIcon icon="computer" />
    <MaterialIcon icon="desktop_mac" />
    <MaterialIcon icon="desktop_windows" />
    <MaterialIcon icon="developer_board" />
    <MaterialIcon icon="device_hub" />
    <MaterialIcon icon="devices_other" />
    <MaterialIcon icon="dock" />
    <MaterialIcon icon="location_on" />
    <MaterialIcon icon="location_off" />
    <MaterialIcon icon="live_help" />
    <MaterialIcon icon="invert_colors_off" />
    <MaterialIcon icon="import_export" />
    <MaterialIcon icon="import_contacts" />
    <MaterialIcon icon="forum" />
    <MaterialIcon icon="email" />
    <MaterialIcon icon="dialpad" />
    <MaterialIcon icon="laptop_windows" />
    <MaterialIcon icon="laptop_mac" />
    <MaterialIcon icon="laptop_chromebook" />
    <MaterialIcon icon="laptop" />
    <MaterialIcon icon="keyboard_voice" />
    <MaterialIcon icon="keyboard_tab" />
    <MaterialIcon icon="keyboard_return" />
    <MaterialIcon icon="keyboard_hide" />
    <MaterialIcon icon="keyboard_capslock" />
    <MaterialIcon icon="keyboard_arrow_down" />
    <MaterialIcon icon="keyboard_arrow_left" />
    <MaterialIcon icon="keyboard_arrow_right" />
    <MaterialIcon icon="keyboard_arrow_up" />
    <MaterialIcon icon="keyboard_backspace" />
    <MaterialIcon icon="loyalty" />
    <MaterialIcon icon="lock_outline" />
    <MaterialIcon icon="lock_open" />
    <MaterialIcon icon="lock" />
    <MaterialIcon icon="perm_data_setting" />
    <MaterialIcon icon="perm_contact_calendar" />
    <MaterialIcon icon="perm_camera_mic" />
    <MaterialIcon icon="payment" />
    <MaterialIcon icon="pan_tool" />
    <MaterialIcon icon="pageview" />
    <MaterialIcon icon="open_with" />
    <MaterialIcon icon="open_in_new" />
    <MaterialIcon icon="open_in_browser" />
    <MaterialIcon icon="add" />
    <MaterialIcon icon="add_box" />
    <MaterialIcon icon="add_circle" />
    <MaterialIcon icon="add_circle_outline" />
    <MaterialIcon icon="archive" />
    <MaterialIcon icon="backspace" />
    <MaterialIcon icon="block" />
    <MaterialIcon icon="clear" />
    <MaterialIcon icon="content_copy" />
    <MaterialIcon icon="content_cut" />
    <MaterialIcon icon="content_paste" />
    <MaterialIcon icon="create" />
    <MaterialIcon icon="delete_sweep" />
    <MaterialIcon icon="drafts" />
    <MaterialIcon icon="filter_list" />
    <MaterialIcon icon="flag" />
    <MaterialIcon icon="font_download" />
    <MaterialIcon icon="forward" />
    <MaterialIcon icon="gesture" />
    <MaterialIcon icon="inbox" />
    <MaterialIcon icon="link" />
    <MaterialIcon icon="low_priority" />
    <MaterialIcon icon="mail" />
    <MaterialIcon icon="markunread" />
    <MaterialIcon icon="move_to_inbox" />
    <MaterialIcon icon="next_week" />
    <MaterialIcon icon="redo" />
    <MaterialIcon icon="remove" />
    <MaterialIcon icon="remove_circle" />
    <MaterialIcon icon="remove_circle_outline" />
    <MaterialIcon icon="reply" />
    <MaterialIcon icon="reply_all" />
    <MaterialIcon icon="report" />
    <MaterialIcon icon="save" />
    <MaterialIcon icon="select_all" />
    <MaterialIcon icon="send" />
    <MaterialIcon icon="sort" />
    <MaterialIcon icon="border_horizontal" />
    <MaterialIcon icon="border_inner" />
    <MaterialIcon icon="border_left" />
    <MaterialIcon icon="settings_input_component" />
    <MaterialIcon icon="text_format" />
    <MaterialIcon icon="unarchive" />
    <MaterialIcon icon="undo" />
    <MaterialIcon icon="weekend" />
    <MaterialIcon icon="signal_wifi_off" />
    <MaterialIcon icon="storage" />
    <MaterialIcon icon="usb" />
    <MaterialIcon icon="wallpaper" />
    <MaterialIcon icon="widgets" />
    <MaterialIcon icon="wifi_lock" />
    <MaterialIcon icon="wifi_tethering" />
    <MaterialIcon icon="border_clear" />
    <MaterialIcon icon="border_color" />
    <MaterialIcon icon="sd_storage" />
    <MaterialIcon icon="settings_system_daydream" />
    <MaterialIcon icon="signal_cellular_4_bar" />
    <MaterialIcon icon="signal_cellular_connected_no_internet_4_bar" />
    <MaterialIcon icon="signal_cellular_no_sim" />
    <MaterialIcon icon="signal_cellular_null" />
    <MaterialIcon icon="signal_cellular_off" />
    <MaterialIcon icon="signal_wifi_4_bar" />
    <MaterialIcon icon="signal_wifi_4_bar_lock" />
    <MaterialIcon icon="battery_full" />
    <MaterialIcon icon="battery_charging_full" />
    <MaterialIcon icon="battery_alert" />
    <MaterialIcon icon="airplanemode_inactive" />
    <MaterialIcon icon="airplanemode_active" />
    <MaterialIcon icon="add_alarm" />
    <MaterialIcon icon="access_time" />
    <MaterialIcon icon="access_alarms" />
    <MaterialIcon icon="access_alarm" />
    <MaterialIcon icon="brightness_low" />
    <MaterialIcon icon="brightness_high" />
    <MaterialIcon icon="brightness_auto" />
    <MaterialIcon icon="bluetooth_searching" />
    <MaterialIcon icon="bluetooth_disabled" />
    <MaterialIcon icon="bluetooth_connected" />
    <MaterialIcon icon="bluetooth" />
    <MaterialIcon icon="battery_unknown" />
    <MaterialIcon icon="battery_std" />
    <MaterialIcon icon="graphic_eq" />
    <MaterialIcon icon="gps_off" />
    <MaterialIcon icon="gps_not_fixed" />
    <MaterialIcon icon="gps_fixed" />
    <MaterialIcon icon="dvr" />
    <MaterialIcon icon="devices" />
    <MaterialIcon icon="developer_mode" />
    <MaterialIcon icon="data_usage" />
    <MaterialIcon icon="brightness_medium" />
    <MaterialIcon icon="screen_rotation" />
    <MaterialIcon icon="screen_lock_rotation" />
    <MaterialIcon icon="screen_lock_portrait" />
    <MaterialIcon icon="screen_lock_landscape" />
    <MaterialIcon icon="nfc" />
    <MaterialIcon icon="network_wifi" />
    <MaterialIcon icon="network_cell" />
    <MaterialIcon icon="location_searching" />
    <MaterialIcon icon="location_disabled" />
    <MaterialIcon icon="border_bottom" />
    <MaterialIcon icon="border_all" />
    <MaterialIcon icon="attach_money" />
    <MaterialIcon icon="attach_file" />
    <MaterialIcon icon="format_indent_increase" />
    <MaterialIcon icon="format_indent_decrease" />
    <MaterialIcon icon="format_color_text" />
    <MaterialIcon icon="format_color_reset" />
    <MaterialIcon icon="format_color_fill" />
    <MaterialIcon icon="format_clear" />
    <MaterialIcon icon="format_bold" />
    <MaterialIcon icon="format_align_right" />
    <MaterialIcon icon="format_align_left" />
    <MaterialIcon icon="format_align_justify" />
    <MaterialIcon icon="format_align_center" />
    <MaterialIcon icon="drag_handle" />
    <MaterialIcon icon="bubble_chart" />
    <MaterialIcon icon="border_vertical" />
    <MaterialIcon icon="border_top" />
    <MaterialIcon icon="border_style" />
    <MaterialIcon icon="border_right" />
    <MaterialIcon icon="border_outer" />
    <MaterialIcon icon="format_strikethrough" />
    <MaterialIcon icon="format_size" />
    <MaterialIcon icon="format_shapes" />
    <MaterialIcon icon="format_quote" />
    <MaterialIcon icon="format_paint" />
    <MaterialIcon icon="format_list_numbered" />
    <MaterialIcon icon="format_list_bulleted" />
    <MaterialIcon icon="format_line_spacing" />
    <MaterialIcon icon="format_italic" />
    <MaterialIcon icon="money_off" />
    <MaterialIcon icon="monetization_on" />
    <MaterialIcon icon="mode_edit" />
    <MaterialIcon icon="mode_comment" />
    <MaterialIcon icon="merge_type" />
    <MaterialIcon icon="linear_scale" />
    <MaterialIcon icon="insert_photo" />
    <MaterialIcon icon="insert_link" />
    <MaterialIcon icon="insert_invitation" />
    <MaterialIcon icon="repeat_one" />
    <MaterialIcon icon="replay" />
    <MaterialIcon icon="replay_10" />
    <MaterialIcon icon="replay_30" />
    <MaterialIcon icon="wrap_text" />
    <MaterialIcon icon="vertical_align_top" />
    <MaterialIcon icon="vertical_align_center" />
    <MaterialIcon icon="vertical_align_bottom" />
    <MaterialIcon icon="title" />
  </p>
);

const Section1 = () => (
  <article className="article">
    <h2 className="article-title">900+ Official Material Design Icons</h2>
    <div className="box box-default">
      <div className={`box-body ${styles.section_icon}`}>
        <Icons />
        <div className="divider divider-solid my-4"></div>
        <Button variant="contained" href="https://material.io/tools/icons/" target="_blank" rel="noopener noreferrer">Complete lists here</Button>
      </div>
    </div>
  </article>
)

const Page = () => (
  <section className="container-fluid container-mw-xl chapter page-icons">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Section1 /></div>
    </QueueAnim>
  </section>
);

export default Page;