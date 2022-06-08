// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import RedoOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedoOutlined';

export interface RedoOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const RedoOutlined: RedoOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={RedoOutlinedSvg} />;

RedoOutlined.displayName = 'RedoOutlined';

export default RedoOutlined;