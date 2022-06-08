// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EnterOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined';

export interface EnterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EnterOutlined: EnterOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={EnterOutlinedSvg} />;

EnterOutlined.displayName = 'EnterOutlined';

export default FunctionalComponent;