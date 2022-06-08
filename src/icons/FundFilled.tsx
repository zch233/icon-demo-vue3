// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled';

export interface FundFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FundFilled: FundFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={FundFilledSvg} />;

FundFilled.displayName = 'FundFilled';

export default FundFilled;