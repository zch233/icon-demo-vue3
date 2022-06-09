// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BorderRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderRightOutlined';

export interface BorderRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BorderRightOutlined: BorderRightOutlinedIconType = (props, context) => <Icon name='BorderRightOutlined' {...{ ...props, ...context.attrs }} icon={BorderRightOutlinedSvg} />;

BorderRightOutlined.displayName = 'BorderRightOutlined';

export default BorderRightOutlined;