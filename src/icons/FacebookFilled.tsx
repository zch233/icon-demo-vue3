// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FacebookFilledSvg from '@ant-design/icons-svg/lib/asn/FacebookFilled';

export interface FacebookFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FacebookFilled: FacebookFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FacebookFilledSvg} />;

FacebookFilled.displayName = 'FacebookFilled';

export default FacebookFilled;