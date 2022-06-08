// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GiftOutlinedSvg from '@ant-design/icons-svg/lib/asn/GiftOutlined';

export interface GiftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GiftOutlined: GiftOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={GiftOutlinedSvg} />;

GiftOutlined.displayName = 'GiftOutlined';

export default FunctionalComponent;