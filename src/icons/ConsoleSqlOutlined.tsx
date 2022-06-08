// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined';

export interface ConsoleSqlOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ConsoleSqlOutlined: ConsoleSqlOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ConsoleSqlOutlinedSvg} />;

ConsoleSqlOutlined.displayName = 'ConsoleSqlOutlined';

export default ConsoleSqlOutlined;