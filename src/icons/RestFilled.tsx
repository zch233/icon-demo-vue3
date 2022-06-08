// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RestFilledSvg from '@ant-design/icons-svg/lib/asn/RestFilled';

export interface RestFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RestFilled: RestFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RestFilledSvg} />;

RestFilled.displayName = 'RestFilled';

export default RestFilled;