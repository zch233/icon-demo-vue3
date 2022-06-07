// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import AccountBookOutlinedSvg from '@ant-design/icons-svg/lib/asn/AccountBookOutlined';

export interface AccountBookOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const AccountBookOutlined: AccountBookOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={AccountBookOutlinedSvg} />
    ;

AccountBookOutlined.displayName = 'AccountBookOutlined';

export default FunctionalComponent;