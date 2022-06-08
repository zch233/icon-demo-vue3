// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ZoomInOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomInOutlined';

export interface ZoomInOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ZoomInOutlined: ZoomInOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ZoomInOutlinedSvg} />;

ZoomInOutlined.displayName = 'ZoomInOutlined';

export default FunctionalComponent;