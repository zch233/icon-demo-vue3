// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled';

export interface BankFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BankFilled: BankFilledIconType = (props, context) => <Icon name='BankFilled' {...{ ...props, ...context.attrs }} icon={BankFilledSvg} />;

BankFilled.displayName = 'BankFilled';

export default BankFilled;