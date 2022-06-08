// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ZoomOutOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZoomOutOutlined';

export interface ZoomOutOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ZoomOutOutlined: ZoomOutOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ZoomOutOutlinedSvg} />;

ZoomOutOutlined.displayName = 'ZoomOutOutlined';

export default FunctionalComponent;