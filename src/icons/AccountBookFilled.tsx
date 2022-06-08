// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled';

export interface AccountBookFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AccountBookFilled: AccountBookFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AccountBookFilledSvg} />;

AccountBookFilled.displayName = 'AccountBookFilled';

export default AccountBookFilled;