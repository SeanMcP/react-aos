export function createAttributes({
    anchor,
    delay,
    duration,
    easing,
    mirror,
    offset,
    once,
    type
}) {
    const attributes = {};
    attributes['data-aos'] = type;

    if (anchor)
        attributes['data-aos-anchor-placement'] = anchor;
    if (delay)
        attributes['data-aos-delay'] = delay;
    if (duration)
        attributes['data-aos-duration'] = duration;
    if (easing)
        attributes['data-aos-easing'] = easing;
    if (mirror)
        attributes['data-aos-mirror'] = mirror;
    if (offset)
        attributes['data-aos-offset'] = offset;
    if (once)
        attributes['data-aos-once'] = once;

    return attributes;
}